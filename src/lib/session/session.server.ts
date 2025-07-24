import type { Session, SessionData } from 'react-router'
import type { AuthenticateResponse } from '../auth/authenticate'
import { createCookieSessionStorage, redirect } from 'react-router'
import { refresh } from '../auth/authenticate'

const USER_SESSION_KEY = 'user'

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    secrets: ['s3cret'],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
  },
})

async function getUserSession(request: Request) {
  return await sessionStorage.getSession(request.headers.get('Cookie'))
}

export async function destroyUserSession(request: Request): Promise<HeadersInit> {
  const session = await getUserSession(request)
  return {
    'Set-Cookie': await sessionStorage.destroySession(session),
  }
}

export async function logout(request: Request, redirectUrl = '/') {
  const headers = await destroyUserSession(request)
  return redirect(redirectUrl, {
    headers,
  })
}

export async function getUser(
  request: Request,
): Promise<AuthenticateResponse['login']['user'] | undefined> {
  const session = await getUserSession(request)
  const retrivedSession = session.get(USER_SESSION_KEY)
  if (!retrivedSession)
    return undefined
  return { id: retrivedSession.user.id, email: retrivedSession.user.email, username: retrivedSession.user.username, nickname: retrivedSession.user.nickname }
}
export async function getTokens(
  request: Request,
): Promise<Omit<AuthenticateResponse['login'], 'user'> | undefined> {
  const session = await getUserSession(request)
  const sessionData = session.get(USER_SESSION_KEY)
  if (!sessionData)
    return undefined
  return {
    authToken: sessionData.authToken,
    authTokenExpiration: sessionData.authTokenExpiration,
    refreshToken: sessionData.refreshToken,
    refreshTokenExpiration: sessionData.refreshTokenExpiration,
  }
}

export async function createUserSessionHeaders(session: Session<SessionData, SessionData>, remember: boolean): Promise<HeadersInit> {
  const expirationTime = 60 * 60 * 24 * 7 // 1 week
  return {
    'Set-Cookie': await sessionStorage.commitSession(session, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      expires: remember ? new Date(Date.now() + expirationTime * 1000) : undefined,
      maxAge: remember
        ? expirationTime
        : undefined,
    }),
  }
}

export async function createUserSession({
  request,
  user,
  remember = true,
}: {
  request: Request
  user: AuthenticateResponse['login']
  remember: boolean
}) {
  const session = await getUserSession(request)
  session.set(USER_SESSION_KEY, user)
  return await createUserSessionHeaders(session, remember)
}

export async function sessionHandler(request: Request): Promise<HeadersInit | undefined> {
  const epochTimeInSeconds = Math.floor(Date.now() / 1000)
  const tokens = await getTokens(request)
  if (!tokens) {
    return undefined
  }
  const authTokenExpiration = tokens ? Number(tokens.authTokenExpiration) : 0
  const refreshTokenExpiration = tokens ? Number(tokens.refreshTokenExpiration) : 0
  const isAuthTokenValid = authTokenExpiration > epochTimeInSeconds
  const isRefreshTokenValid = refreshTokenExpiration > epochTimeInSeconds

  if (!isAuthTokenValid && isRefreshTokenValid) {
    const user = await getUser(request)
    const refreshTokensResponse = await refresh({ token: tokens.refreshToken })
    if (user && refreshTokensResponse.data?.refreshToken.success) {
      const newSessionInfo = {
        refreshToken: tokens.refreshToken,
        refreshTokenExpiration: tokens.refreshTokenExpiration,
        authToken: refreshTokensResponse.data.refreshToken.authToken,
        authTokenExpiration: refreshTokensResponse.data.refreshToken.authTokenExpiration,
        user,
      }

      return await createUserSession({
        request,
        user: newSessionInfo,
        remember: true,
      })
    }
  }
  else if (!isAuthTokenValid && !isRefreshTokenValid) {
    return await destroyUserSession(request)
  }
}

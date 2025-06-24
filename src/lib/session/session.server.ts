import type { AuthenticateResponse } from '../auth/authenticate'
import { createCookieSessionStorage, redirect } from 'react-router'

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

export const { commitSession, destroySession } = sessionStorage

async function getUserSession(request: Request) {
  return await sessionStorage.getSession(request.headers.get('Cookie'))
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}

export async function getUser(
  request: Request,
): Promise<AuthenticateResponse['login']['user'] | undefined> {
  const session = await getUserSession(request)
  const user = session.get(USER_SESSION_KEY)
  if (!user)
    return undefined
  return { id: user.id, email: user.email, username: user.username, nickname: user.nickname }
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

export async function createUserSession({
  request,
  user,
  remember = true,
  redirectUrl,
}: {
  request: Request
  user: AuthenticateResponse['login']
  remember: boolean
  redirectUrl?: string
}) {
  const session = await getUserSession(request)
  session.set(USER_SESSION_KEY, user)
  return redirect(redirectUrl || '/', {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  })
}

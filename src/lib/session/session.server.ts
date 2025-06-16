// app/services/session.server.ts

import { createCookieSessionStorage, redirect } from 'react-router'

export interface User { id: string, name: string, email: string }

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

const USER_SESSION_KEY = 'userId'

export async function getUser(
  request: Request,
): Promise<User | undefined> {
  const session = await getUserSession(request)
  const userId = session.get(USER_SESSION_KEY)
  if (!userId)
    return undefined
  return { id: userId, name: userId, email: userId }
}

export async function createUserSession({
  request,
  userId,
  remember = true,
  redirectUrl,
}: {
  request: Request
  userId: string
  remember: boolean
  redirectUrl?: string
}) {
  const session = await getUserSession(request)
  session.set(USER_SESSION_KEY, userId)
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

import type { unstable_MiddlewareFunction } from 'react-router'
import { redirect } from 'react-router'
import { userContext } from '@/contexts/UserContext'
import { getUser, sessionHandler } from '@/lib/session/session.server'

export const sessionMiddleware: unstable_MiddlewareFunction = async ({
  request,
  context,
}) => {
  const sessionHeaders = await sessionHandler(request)

  if (sessionHeaders) {
    throw redirect(request.url, {
      headers: sessionHeaders,
    })
  }

  const user = await getUser(request)
  if (user) {
    context.set(userContext, user)
  }
}

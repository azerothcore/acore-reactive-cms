import type { ActionFunctionArgs } from 'react-router'
import type { Route } from './+types/login'
import { redirect } from 'react-router'
import { userContext } from '@/contexts/UserContext'
import { authenticate } from '@/lib/auth/authenticate'
import { createUserSession } from '@/lib/session/session.server'
import LoginPage from '@/pages/Login'

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData()
  const username = formData.get('username')?.toString() || ''
  const password = formData.get('password')?.toString() || ''
  let response: Response

  try {
    const result = await authenticate({ username, password })
    if (result.data) {
      const sessionHeaders = await createUserSession({
        request,
        user: result.data.login,
        remember: true,
      })
      if (!sessionHeaders) {
        throw new Error('An error occurred while creating the session')
      }

      response = redirect('/', {
        headers: sessionHeaders,
      })
    }
    else {
      throw new Error('Authentication failed: No data returned')
    }
  }
  catch {
    response = new Response('There was an error logging you in.', {
      status: 401,
      statusText: 'Unauthorized',
    })
  }

  return response
}

export async function loader({
  context,
}: Route.LoaderArgs) {
  const user = context.get(userContext)
  if (user) {
    return redirect('/')
  }
  return null
}

export default function Login() {
  return (
    <>
      <title>Azeroth Core - Login</title>
      <meta
        name="description"
        content="Login to Azeroth Core."
      />
      <LoginPage />
    </>
  )
}

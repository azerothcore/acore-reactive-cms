import type { ActionFunctionArgs } from 'react-router'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUser } from '@/contexts/auth/useUser'
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

  // TODO: implement actual authentication logic here

  try {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const result = await authenticate({ username, password })
    response = await createUserSession({
      request,
      userId: username,
      remember: true,
    })

    if (!response) {
      throw new Error('An error occurred while creating the session')
    }
  }
  catch (error) {
    console.error('Authentication failed:', error)
    response = new Response('Authentication failed', {
      status: 401,
      statusText: 'Unauthorized',
    })
  }

  return response
}

export default function Login() {
  const user = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  if (user) {
    return null
  }
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

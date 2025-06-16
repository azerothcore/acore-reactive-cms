import type { ActionFunctionArgs } from 'react-router'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUser } from '@/contexts/auth/useUser'
import { createUserSession } from '@/lib/session/session.server'
import LoginPage from '@/pages/Login'

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email')?.toString() || ''
  // const password = formData.get('password')?.toString() || ''
  let response: Response

  // TODO: implement actual authentication logic here

  try {
    response = await createUserSession({
      request,
      userId: email,
      remember: true,
    })

    if (!response) {
      throw new Error('An error occurred while creating the session')
    }
  }
  catch (error) {
    if (error instanceof Error) {
      return { error: error.message }
    }

    return { error: 'An unknown error occurred' }
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

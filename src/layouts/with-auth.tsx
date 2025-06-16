import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useUser } from '@/contexts/auth/useUser'

const WithAuthLayout: React.FC = () => {
  const navigate = useNavigate()
  const user = useUser()

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true })
    }
  }, [user, navigate])

  if (!user) {
    return null
  }

  return (
    <Outlet />
  )
}

export default WithAuthLayout

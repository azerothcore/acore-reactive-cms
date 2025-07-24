import type { Route } from '../app/+types/root'
import { Outlet, redirect } from 'react-router'
import { userContext } from '@/contexts/UserContext'

export function loader({ context }: Route.LoaderArgs) {
  const user = context.get(userContext)
  if (!user) {
    return redirect('/login')
  }
  return null
}

const WithAuthLayout: React.FC = () => {
  return (
    <Outlet />
  )
}

export default WithAuthLayout

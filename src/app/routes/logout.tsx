import type { Route } from './+types/logout'
import { redirect } from 'react-router'
import { logout } from '@/lib/session/session.server'

export async function action({ request }: Route.ActionArgs) {
  return logout(request)
}

export async function loader() {
  return redirect('/login')
}

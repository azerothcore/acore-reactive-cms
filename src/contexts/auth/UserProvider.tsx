import type { AuthenticateResponse } from '@/lib/auth/authenticate'
import { UserContext } from './UserContext'

export function UserProvider({ children, user }: { children: React.ReactNode, user: AuthenticateResponse['login']['user'] | undefined }) {
  return (
    <UserContext value={user}>
      {children}
    </UserContext>
  )
};

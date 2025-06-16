import type { User } from '@/lib/session/session.server'
import { UserContext } from './UserContext'

export function UserProvider({ children, user }: { children: React.ReactNode, user: User | undefined }) {
  return (
    <UserContext value={user}>
      {children}
    </UserContext>
  )
};

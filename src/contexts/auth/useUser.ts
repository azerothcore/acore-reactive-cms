import { use } from 'react'
import { UserContext } from './UserContext'

export function useUser() {
  const context = use(UserContext)

  return context
}

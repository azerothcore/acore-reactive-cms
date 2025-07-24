import type { AuthenticateResponse } from '@/lib/auth/authenticate'
import { unstable_createContext } from 'react-router'

export type User = AuthenticateResponse['login']['user']

export const userContext = unstable_createContext<User | null>(null)

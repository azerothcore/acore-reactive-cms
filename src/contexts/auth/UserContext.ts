import type { AuthenticateResponse } from '@/lib/auth/authenticate'
import { createContext } from 'react'

export const UserContext = createContext<AuthenticateResponse['login']['user'] | undefined>(undefined)

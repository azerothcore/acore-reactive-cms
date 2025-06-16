import type { User } from '@/lib/session/session.server'
import { createContext } from 'react'

export const UserContext = createContext<User | undefined>(undefined)

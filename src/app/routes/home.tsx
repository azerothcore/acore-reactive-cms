import type { MetaFunction } from 'react-router'
import HomePage from '@/pages/Home'

export const meta: MetaFunction = () => {
  return [
    { title: 'Azeroth Core' },
    { name: 'description', content: 'Complete Open Source and Modular solution for MMO.' },
  ]
}

export default function Home() {
  return (
    <HomePage />
  )
}

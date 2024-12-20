import type { MetaFunction } from 'react-router'
import { HomeHeader } from 'acore-reactive-cms-theme'

export const meta: MetaFunction = () => {
  return [
    { title: 'Chromie Craft' },
    { name: 'description', content: 'The open-source PVE full-progressive server.' },
  ]
}

export default function Home() {
  return (
    <HomeHeader />
  )
}

import type { MetaFunction } from '@remix-run/node'
import { HomeHeader } from 'acore-reactive-cms-theme'

export const meta: MetaFunction = () => {
  return [
    { title: 'Chromie Craft' },
    { name: 'description', content: 'The open-source PVE full-progressive server.' },
  ]
}

export default function Index() {
  return (
    <HomeHeader />
  )
}

import type { Route } from '../app/+types/root'
import type { NavLinkItem } from '@/components/Nav'
import { Outlet } from 'react-router'
import { Nav } from '@/components/Nav'
import { userContext } from '@/contexts/UserContext'

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/contacts', label: 'Contacts' },
  { href: '/posts', label: 'Posts' },
]

export async function loader({ context }: Route.LoaderArgs) {
  const user = context.get(userContext)

  return user
}

function WithNavLayout({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  return (
    <>
      <Nav links={navLinks} user={loaderData} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default WithNavLayout

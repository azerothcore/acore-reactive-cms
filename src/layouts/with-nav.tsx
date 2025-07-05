import type { NavLinkItem } from '@/components/Nav'
import { Outlet } from 'react-router'
import { Nav } from '@/components/Nav'

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/contacts', label: 'Contacts' },
  { href: '/posts', label: 'Posts' },
]

const WithNavLayout: React.FC = () => {
  return (
    <>
      <Nav links={navLinks} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default WithNavLayout

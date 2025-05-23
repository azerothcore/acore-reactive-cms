import type { NavLinkItem } from '@/components/Nav'
import { Outlet } from 'react-router'
import { Nav } from '@/components/Nav'

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const BaseLayout: React.FC = () => {
  return (
    <>
      <Nav links={navLinks} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout

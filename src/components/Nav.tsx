import { Box, Button, Container, Flex, Text } from '@radix-ui/themes'
import azerothCoreLogo from '@/assets/azeroth-core-logo.png'
import { Link } from '@/components/Link'
import { useUser } from '@/contexts/auth/useUser'
import { LogoutButton } from './LogoutButton'

export interface NavLinkItem {
  href: string
  label: string
}

export interface NavProps {
  links: NavLinkItem[]
}

export const Nav: React.FC<NavProps> = ({ links }) => {
  const user = useUser()
  return (
    <Box asChild pb="2" pl="4" pr="4" pt="2" width="100%" position="absolute" style={{ background: 'var(--color-overlay)', top: 0, left: 0, zIndex: 1 }}>
      <nav>
        <Container size="3" position="relative">
          <Flex gap="3" align="center" justify="between" flexGrow="1">
            <Link href="/">
              <img src={azerothCoreLogo} alt="Azeroth Core Logo" width="auto" height="40px" />
            </Link>
            <Flex gap="4" align="center" justify="center" flexGrow="1">
              {links.map(link => (
                <Link href={link.href} key={link.href} color="gray">
                  {link.label}
                </Link>
              ))}
            </Flex>
            {user ? <LogoutButton /> : <Button color="amber" asChild><Link href="/login" color="amber"><Text weight="bold">Login</Text></Link></Button>}
          </Flex>
        </Container>
      </nav>
    </Box>
  )
}

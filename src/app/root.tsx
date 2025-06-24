import type { LinksFunction } from 'react-router'
import type { Route } from './+types/root'
import { ApolloHydrationHelper } from '@apollo/client-integration-react-router'
import { Theme } from '@radix-ui/themes'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { UserProvider } from '@/contexts/auth/UserProvider'
import { getUser } from '@/lib/session/session.server'
import '@/styles/reset.css'
import '@/styles/gradients.css'
import '@radix-ui/themes/styles.css'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ApolloHydrationHelper>
          {children}
        </ApolloHydrationHelper>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export async function loader({ request }: Route.LoaderArgs) {
  return await getUser(request)
}

export default function Root({ loaderData }: Route.ComponentProps) {
  return (
    <Theme appearance="dark" className="app-bg--gradient">
      <UserProvider user={loaderData}>
        <Outlet />
      </UserProvider>
    </Theme>
  )
}

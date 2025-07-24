import type { LinksFunction } from 'react-router'
import { ApolloHydrationHelper } from '@apollo/client-integration-react-router'
import { Theme } from '@radix-ui/themes'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { sessionMiddleware } from '@/middleware/session'
import '@/styles/reset.css'
import '@/styles/gradients.css'
import '@/styles/utils.css'
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

export const unstable_middleware = [sessionMiddleware]

export default function Root() {
  return (
    <Theme appearance="dark" className="app-bg--gradient">
      <Outlet />
    </Theme>
  )
}

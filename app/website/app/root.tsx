import type { LinksFunction } from 'react-router'
import { HeadLinks, ThemeProvider } from 'acore-reactive-cms-theme'

import { Links, Meta, Outlet, Scripts, ScrollRestoration, useHref, useNavigate } from 'react-router'

import '@/styles/reset.css'

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
        <HeadLinks />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  const navigate = useNavigate()
  return (
    <ThemeProvider router={{ navigate, useHref }}>
      <Outlet />
    </ThemeProvider>
  )
}

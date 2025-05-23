import type { LinkProps as RadixLinkProps } from '@radix-ui/themes'
import { Link as RadixLink } from '@radix-ui/themes'
import { Link as ReactRouterLink } from 'react-router'

export interface LinkProps extends Omit<RadixLinkProps, 'asChild'> {
  href: string
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = (props) => {
  const { href, children, ...rest } = props

  return (
    <RadixLink
      asChild
      {...rest}
    >
      <ReactRouterLink to={href}>
        {children}
      </ReactRouterLink>
    </RadixLink>
  )
}

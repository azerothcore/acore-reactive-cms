/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { ApolloProvider } from '@apollo/client/index.js'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import { makeClient } from '@/lib/gql/apollo.client'

startTransition(async () => {
  const client = await makeClient()

  hydrateRoot(
    document,
    <StrictMode>
      <ApolloProvider client={client}>
        <HydratedRouter />
      </ApolloProvider>
    </StrictMode>,
  )
})

import {
  ApolloClient,
  createApolloLoaderHandler,
} from '@apollo/client-integration-react-router'
import { HttpLink, InMemoryCache } from '@apollo/client/index.js'

// `request` will be available on the server during SSR or in loaders, but not in the browser
// eslint-disable-next-line unused-imports/no-unused-vars
export function makeClient(request?: Request) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_API_URI }),
  })
}

export const apolloLoader = createApolloLoaderHandler(makeClient)

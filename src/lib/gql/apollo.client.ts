import {
  ApolloClient,
} from '@apollo/client-integration-react-router'
import { HttpLink, InMemoryCache } from '@apollo/client/index.js'

export async function makeClient() {
  const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_API_URI })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  })
}

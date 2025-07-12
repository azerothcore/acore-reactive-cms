import {
  ApolloClient,
} from '@apollo/client-integration-react-router'
import { HttpLink, InMemoryCache } from '@apollo/client/index.js'
import { setContext } from '@apollo/client/link/context'
import { getTokens } from '../session/session.server'

export async function makeClient(request?: Request) {
  const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_API_URI })
  let token = ''
  if (request) {
    const tokens = await getTokens(request)
    token = tokens?.authToken || ''
  }

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
}

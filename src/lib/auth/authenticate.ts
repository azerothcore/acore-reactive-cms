import { gql } from '@apollo/client/index.js'
import { makeClient } from '../gql/apollo'

interface AuthenticateVariables {
  username: string
  password: string
}

export async function authenticate(variables: AuthenticateVariables) {
  const query = gql`
mutation loginWithPassword(
  $username: String!,
  $password: String!,
) {
  login(
    input: {
      provider: PASSWORD,
      credentials: {      
        username: $username,
        password: $password,
      }
    }
  ) {
    authToken
    authTokenExpiration
    refreshToken
    refreshTokenExpiration
  }
}`
  const client = makeClient()

  return client.mutate({
    mutation: query,
    variables,
  })
}

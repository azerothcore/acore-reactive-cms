import { gql } from '@apollo/client/index.js'
import { makeClient } from '../gql/apollo.server'

interface AuthenticateVariables {
  username: string
  password: string
}

export interface AuthenticateResponse {
  login: {
    authToken: string
    authTokenExpiration: string
    refreshToken: string
    refreshTokenExpiration: string
    user: {
      id: string
      email: string
      username: string
      nickname: string
    }
  }
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
    user {
      id,
      email,
      username,
      nickname
    }
  }
}`
  const client = await makeClient()

  return client.mutate<AuthenticateResponse>({
    mutation: query,
    variables,
  })
}

interface RefreshVariables {
  token: string
}

interface RefreshResponse {
  refreshToken: {
    authToken: string
    authTokenExpiration: string
    success: boolean
  }
}

export async function refresh(variables: RefreshVariables) {
  const query = gql`
    mutation refreshToken(
      $token: String!
    ) {
      refreshToken(input: {refreshToken: $token}) {
        authToken
        authTokenExpiration
        success
      }
    }`

  const client = await makeClient()

  return client.mutate<RefreshResponse>({
    mutation: query,
    variables,
  })
}

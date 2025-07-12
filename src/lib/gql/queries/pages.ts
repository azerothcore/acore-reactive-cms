import type { Post } from './posts'
import { gql } from '@apollo/client/index.js'
import { makeClient } from '../apollo.server'

const GET_PAGE_BY_URI = gql`
query GetPageByUri($uri: ID!) {
  page(id: $uri, idType: URI) {
    id
    content
    title
    slug
    date
    featuredImage {
      node {
        altText
        mediaType
      }
    }
  }
}
`

export async function getPageByUri(uri: string, request: Request) {
  const client = await makeClient(request)
  return client.query<{ page: Post }>({
    query: GET_PAGE_BY_URI,
    variables: { uri },
  })
}

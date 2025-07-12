import { gql } from '@apollo/client/index.js'
import { makeClient } from '../apollo.server'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
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
  }
`

export interface Post {
  id: string
  title: string
  content: string
  slug: string
  date: string
  featuredImage: null
}

export async function getPosts(request: Request) {
  const client = await makeClient(request)
  return client.query<{ posts: { nodes: Post[] } }>({
    query: GET_POSTS,
  })
}

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
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

export async function getPostBySlug(slug: string, request: Request) {
  const client = await makeClient(request)
  return client.query<{ post: Post }>({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  })
}

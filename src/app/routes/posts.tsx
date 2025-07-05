import type { Route } from './+types/posts'
import { getPosts } from '@/lib/gql/queries/posts'
import PostList from '@/pages/PostList'

export async function loader() {
  return await getPosts()
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  return (
    <PostList posts={loaderData.data.posts.nodes || []} />
  )
}

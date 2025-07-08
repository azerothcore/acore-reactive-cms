import type { Route } from './+types/posts'
import { getPosts } from '@/lib/gql/queries/posts'
import PostList from '@/pages/PostList'

export async function loader() {
  return await getPosts()
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <title>Azeroth Core - Posts</title>
      <meta name="description" content="Discover the latest posts from Azeroth Core" />
      <PostList posts={loaderData.data.posts.nodes || []} />
    </>
  )
}

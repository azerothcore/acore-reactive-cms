import type { Route } from './+types/posts'
import { getPosts } from '@/lib/gql/queries/posts'
import { isRestrictedContent } from '@/lib/gql/utils'
import PostList from '@/pages/PostList'

export async function loader({ request }: Route.LoaderArgs) {
  const response = await getPosts(request)

  return {
    ...response,
    data: {
      ...response.data,
      posts: {
        ...response.data.posts,
        nodes: response.data.posts.nodes.filter(post => !isRestrictedContent(post.content)),
      },
    },
  }
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

import type { Route } from './+types/post'
import { getPostBySlug } from '@/lib/gql/queries/posts'
import Post from '@/pages/Post'

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params
  return await getPostBySlug(slug)
}

export default function PostPage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <title>{`${loaderData.data.post.title} - Azeroth Core`}</title>
      <Post post={loaderData.data.post} />
    </>
  )
}

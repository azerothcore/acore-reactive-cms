import type { Route } from './+types/post'
import { redirect } from 'react-router'
import { getPostBySlug } from '@/lib/gql/queries/posts'
import Post from '@/pages/Post'

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params
  const response = await getPostBySlug(slug)
  if (!response.data.post) {
    throw redirect('/404')
  }
  return response
}

export default function PostPage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <title>{`${loaderData.data.post.title} - Azeroth Core`}</title>
      <Post post={loaderData.data.post} />
    </>
  )
}

import type { Route } from './+types/post'
import { replace } from 'react-router'
import { getPostBySlug } from '@/lib/gql/queries/posts'
import { isRestrictedContent } from '@/lib/gql/utils'
import Post from '@/pages/Post'

export async function loader({ params, request }: Route.LoaderArgs) {
  const { slug } = params

  const response = await getPostBySlug(slug, request)
  if (!response.data.post || isRestrictedContent(response.data.post.content)) {
    throw replace('/404')
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

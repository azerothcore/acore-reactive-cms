import type { Route } from './+types/page'
import { replace } from 'react-router'
import { getPageByUri } from '@/lib/gql/queries/pages'
import { isRestrictedContent } from '@/lib/gql/utils'
import Post from '@/pages/Post'

export async function loader({ params, request }: Route.LoaderArgs) {
  const { uri } = params

  const response = await getPageByUri(uri, request)
  if (!response.data.page || isRestrictedContent(response.data.page.content)) {
    throw replace('/404')
  }
  return response
}

export default function PostPage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <title>{`${loaderData.data.page.title} - Azeroth Core`}</title>
      <Post post={loaderData.data.page} />
    </>
  )
}

import type { Route } from './+types/page'
import { redirect } from 'react-router'
import { getPageByUri } from '@/lib/gql/queries/pages'
import Post from '@/pages/Post'

export async function loader({ params }: Route.LoaderArgs) {
  const { uri } = params

  const response = await getPageByUri(uri)
  if (!response.data.page) {
    throw redirect('/404')
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

import type { Post as PostType } from '@/lib/gql/queries/posts'
import { Box, Heading, Text } from '@radix-ui/themes'
import { DateDisplayer } from '@/components/DateDisplayer'
import { Section } from '@/components/Section'
import '@/styles/post.sass'

interface Props {
  post: PostType
}

function Post(props: Props) {
  const { post } = props

  return (
    <Section>
      <Box asChild pt="4" pb="8">
        <article>
          <Heading as="h1">{post.title}</Heading>
          <Text size="2" color="gray" asChild>
            <DateDisplayer date={post.date} />
          </Text>
          <Box pt="3" id="post-content" className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Box>
    </Section>
  )
}

export default Post

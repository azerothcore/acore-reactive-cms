import type { Post } from '@/lib/gql/queries/posts'
import { Box, Card, Heading, Text } from '@radix-ui/themes'
import { DateDisplayer } from '@/components/DateDisplayer'
import { Link } from '@/components/Link'
import { PostPreviewText } from '@/components/PostPreviewText'
import { Section } from '@/components/Section'

interface Props {
  posts: Post[]
}

function PostList(props: Props) {
  const { posts } = props

  return (
    <Section title="Posts">
      {posts.map(post => (
        <Card key={post.id} asChild>
          <article>
            <Link href={`/posts/${post.slug}`} style={{ color: 'var(--color-gray11)' }}>
              <Heading as="h2">{post.title}</Heading>
            </Link>
            <Text size="2" color="gray" asChild>
              <DateDisplayer date={post.date} />
            </Text>
            <PostPreviewText content={post.content} />
            <Box mt="3">
              <Text size="2" color="amber" asChild>
                <Link href={`/posts/${post.slug}`} color="amber">
                  Read more
                </Link>
              </Text>
            </Box>
          </article>
        </Card>
      ))}
    </Section>
  )
}

export default PostList

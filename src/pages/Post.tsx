import type { Post as PostType } from '@/lib/gql/queries/posts'
import { AspectRatio, Box, Heading, Text } from '@radix-ui/themes'
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
          {post.featuredImage
            ? (
                <Box pt="3" pb="3">
                  <AspectRatio ratio={16 / 8}>
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText}
                      loading="lazy"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'var(--radius-2)',
                      }}
                    />
                  </AspectRatio>
                </Box>
              )
            : null}
          <Box pt="3" id="post-content" className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Box>
    </Section>
  )
}

export default Post

import { Box, Text } from '@radix-ui/themes'
import './postPreviewText.css'

type PostPreviewTextProps = React.ComponentProps<typeof Box> & {
  content: string
}

export function PostPreviewText(props: PostPreviewTextProps) {
  const { content, ...boxProps } = props

  return (
    <Box className="post-preview-container" maxHeight="150px" overflow="hidden" pt="3" position="relative" {...boxProps}>
      <Text as="p" dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  )
}

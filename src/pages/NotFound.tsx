import { Text } from '@radix-ui/themes'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

function NotFound() {
  return (
    <Section title="Page not found">
      <Text as="p" size="3" align="center">
        The page you are looking for does not exist.
      </Text>
      <Text as="p" size="3" align="center">
        <Link href="/" color="amber" mt="4">
          Go back to the homepage
        </Link>
      </Text>
    </Section>
  )
}

export default NotFound

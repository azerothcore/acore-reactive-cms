import { Box, Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { Section } from '@/components/Section'

export const PlaySection: React.FC = () => {
  return (
    <Section id="play">
      <Flex direction={{ initial: 'column', xs: 'row' }} gap="4" justify="center" align="center">
        <Card style={{ width: '100%' }}>
          <Heading size="6" as="h3" weight="bold" align="center" mb="3">
            Join the Adventure
          </Heading>
          <Flex
            direction={{ initial: 'column', xs: 'row' }}
            gap="4"
            justify="between"
          >
            <Box p="4" flexGrow="1" flexBasis="0%" flexShrink="1" width="100%">
              <ul>
                <li>
                  <Text>Item 1</Text>
                </li>
                <li>
                  <Text>Item 2</Text>
                </li>
                <li>
                  <Text>Item 3</Text>
                </li>
                <li>
                  <Text>Item 4</Text>
                </li>
              </ul>
            </Box>
            <Box p="4" flexGrow="1" flexBasis="0%" flexShrink="1" width="100%">

              <Box>
                <Text as="label" htmlFor="email">
                  Email
                </Text>
                <TextField.Root placeholder="Enter your email" id="email" />
              </Box>
              <Box mt="3">
                <Text as="label" htmlFor="password">
                  Password
                </Text>
                <TextField.Root placeholder="Enter your password" id="password" />
              </Box>
              <Button color="amber" mt="5" style={{ width: '100%' }}>
                <Text weight="bold">Register</Text>
              </Button>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Section>
  )
}

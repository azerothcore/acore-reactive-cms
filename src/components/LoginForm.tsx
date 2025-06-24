import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'
import { useFetcher } from 'react-router'

export const LoginForm: React.FC = () => {
  const fetcher = useFetcher()

  return (
    <Flex asChild direction="column" gap="4">
      <fetcher.Form method="post">
        <Box>
          <Text as="label" htmlFor="username">
            Username
          </Text>
          <TextField.Root placeholder="Enter your username" id="username" name="username" />
        </Box>
        <Box>
          <Text as="label" htmlFor="password">
            Password
          </Text>
          <TextField.Root type="password" placeholder="Enter your password" id="password" name="password" />
        </Box>
        {fetcher.data ? <Text mb="-6" mt="-2" color="red">{fetcher.data}</Text> : null}
        <Button mt="4" color="amber" style={{ width: '100%' }} type="submit" disabled={fetcher.state !== 'idle'}>
          <Text weight="bold">Login</Text>
        </Button>
      </fetcher.Form>
    </Flex>
  )
}

import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'
import { Form } from 'react-router'

export const LoginForm: React.FC = () => {
  return (
    <Flex asChild direction="column" gap="4">
      <Form method="post">
        <Box>
          <Text as="label" htmlFor="email">
            Email
          </Text>
          <TextField.Root placeholder="Enter your email" id="email" name="email" />
        </Box>
        <Box>
          <Text as="label" htmlFor="password">
            Password
          </Text>
          <TextField.Root type="password" placeholder="Enter your password" id="password" name="password" />
        </Box>
        <Button mt="4" color="amber" style={{ width: '100%' }} type="submit">
          <Text weight="bold">Login</Text>
        </Button>
      </Form>
    </Flex>
  )
}

import { Card } from '@radix-ui/themes'
import { LoginForm } from '@/components/LoginForm'
import { Section } from '@/components/Section'

function Login() {
  return (
    <Section width="400px" maxWidth="100%" ml="auto" mr="auto" title="Login">
      <Card>
        <LoginForm />
      </Card>
    </Section>
  )
}

export default Login

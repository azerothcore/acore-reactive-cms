import { Button } from '@radix-ui/themes'
import { Form } from 'react-router'

export function LogoutButton() {
  return (
    <Form method="post" action="/logout">
      <Button type="submit" color="amber" variant="outline">Logout</Button>
    </Form>
  )
}

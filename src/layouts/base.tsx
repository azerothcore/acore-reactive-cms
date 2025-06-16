import { Outlet } from 'react-router'

const BaseLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default BaseLayout

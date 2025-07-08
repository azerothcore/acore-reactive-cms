import { Outlet } from 'react-router'

const VerticallyCenteredLayout: React.FC = () => {
  return (
    <main className="vertically-centered">
      <Outlet />
    </main>
  )
}

export default VerticallyCenteredLayout

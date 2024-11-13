import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <div><Link href='/remote-a'>Host Application</Link></div>
      <div style={{ padding: '16px', height: '400px' }}>
        <div style={{ display: 'inline-flex', gap: '16px' }}>
          <Link to="/remote-a" className="[&.active]:font-bold">
            Remote-a
          </Link>
          <Link to="/remote-b" className="[&.active]:font-bold">
            Remote-b
          </Link>
        </div>
        <hr />
        <Outlet />
      </div>
    </div>
  ),
});

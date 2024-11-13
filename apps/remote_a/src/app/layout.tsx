import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div style={{ display: 'inline-flex', gap: '16px' }}>
        <Link to="/" className="[&.active]:font-bold">
          Remote_a Home
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          Remote_a Products
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          Remote_a About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

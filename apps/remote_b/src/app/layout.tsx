import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div style={{ display: 'inline-flex', gap: '16px' }}>
        <Link to="/" className="[&.active]:font-bold">
          Remote_b Home
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          Remote_b Products
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          Remote_b About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

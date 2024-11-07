import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const rootRoute = createRootRoute({
  component: () => (
    <>
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
      <TanStackRouterDevtools />
    </>
  ),
});


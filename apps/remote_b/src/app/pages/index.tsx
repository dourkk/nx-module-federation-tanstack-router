import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../layout';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => {
    return (
      <div className="p-2">
        <h3>Welcome remote_b!</h3>
      </div>
    );
  },
});

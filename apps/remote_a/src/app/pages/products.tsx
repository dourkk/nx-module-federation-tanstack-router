import { Link, createRoute } from '@tanstack/react-router';
import { rootRoute } from '../layout';

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'products',
});

export const productsIndexRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: '/',
  component: () => {
    return (
      <ul>
        {Array(10)
          .fill('')
          .map((_, index) => (
            <li key={index}>
              <Link href={`/products/${index}`}>Product Item {index}</Link>
            </li>
          ))}
      </ul>
    );
  },
});

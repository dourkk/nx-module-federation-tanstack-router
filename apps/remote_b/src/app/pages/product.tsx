import { createRoute } from '@tanstack/react-router';
import { productsRoute } from './products';

function ProductPage() {
  const { productId } = productRoute.useParams();

  return <div>Product item ID: {productId}</div>;
}

export const productRoute = createRoute({
  getParentRoute: () => productsRoute,
  path: '$productId',
  loader: ({ params }) => console.log(`Pre-fecth: ${params.productId}`),
  component: ProductPage,
});

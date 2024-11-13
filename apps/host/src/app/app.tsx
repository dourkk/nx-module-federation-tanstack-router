import { router } from './pages/root';
import { RouterProvider } from '@tanstack/react-router';

export function App() {
  return (
    <div>
      <div style={{ padding: '16px', height: '100%', backgroundColor: 'pink' }}>
        <RouterProvider router={router as any} />
      </div>
    </div>
  );
}

export default App;

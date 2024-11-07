import { router } from './pages/root';
import { RouterProvider } from '@tanstack/react-router';

export function App() {
  return (
    <div>
      <div style={{ padding: '16px', height: '100%', backgroundColor: 'pink' }}>
        <div>Host Application</div>
        <div style={{ padding: '16px', height: '400px' }}>
          <RouterProvider router={router as any} />
        </div>
      </div>
    </div>
  );
}

export default App;

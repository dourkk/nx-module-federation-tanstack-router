import {
  RouterProvider,
} from '@tanstack/react-router'
import { router } from './pages/root';


export function App() {
  return (
    <div style={{ backgroundColor: 'beige' }}>
      <RouterProvider basepath='/remote-a' router={router} />
    </div>
  );
}

export default App;

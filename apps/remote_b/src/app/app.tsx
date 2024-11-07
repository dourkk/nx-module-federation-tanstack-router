import {
  RouterProvider,
} from '@tanstack/react-router'
import { router } from './pages/root';


export function App() {
  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <RouterProvider basepath='/remote-b' router={router} />
    </div>
  );
}

export default App;

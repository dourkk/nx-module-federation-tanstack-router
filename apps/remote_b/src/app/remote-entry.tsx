import { Root, createRoot } from 'react-dom/client';
import { App } from './app';

export function remoteEntry() {
  const rootMap = new Map<any, Root>();
  return {
    render(info: {
      dom: HTMLElement;
      basename?: string;
      memoryRoute?: { entryPath: string };
    }) {
      const root = createRoot(info.dom);
      rootMap.set(info.dom, root);
      root.render(<App />);
    },
    destroy(info: { dom: HTMLElement }) {
      const root = rootMap.get(info.dom);
      root?.unmount();
    },
  };
}

export default remoteEntry();

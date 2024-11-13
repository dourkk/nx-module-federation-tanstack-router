import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../layout';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { Suspense, lazy, useEffect, useRef } from 'react';

const LazyComponent = lazy(async () => {
  const m: any = await loadRemote('remote_b/Module');
  console.log(m);
  const providerInfo = m.default;
  return {
    default: () => {
      const rootRef = useRef(null);
      const providerInfoRef = useRef<any>(null);

      useEffect(() => {
        const providerReturn = providerInfo;
        providerInfoRef.current = providerReturn;
        if (rootRef.current) {
          providerReturn.render({ dom: rootRef.current });
        }

        return () => {
          providerInfoRef.current?.destroy({
            dom: rootRef.current,
          });
        };
      }, []);

      return <div ref={rootRef}></div>;
    },
  };
});

export const remoteBRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/remote-b/*',
  component: () => {
    return (
      <Suspense fallback={<div>loading</div>}>
        <LazyComponent />
      </Suspense>
    );
  },
});

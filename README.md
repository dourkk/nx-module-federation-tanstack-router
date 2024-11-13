# Issue: `nx + Module Federation Runtime + TanStack/Router`

## Steps to Reproduce

1. Start the `remote_a` and `remote_b` applications:

   ```bash
   yarn nx run remote_a:serve --port 4200
   yarn nx run remote_b:serve --port 4201
   ```

2. Start the `host` application:

   ```bash
   yarn nx run host:serve --port 3000
   ```

3. Open the host application in a browser:
   [http://localhost:3000](http://localhost:3000)

4. Attempt to navigate to the following routes:
   - [http://localhost:3000/remote-a](http://localhost:3000/remote-a)
   - [http://localhost:3000/remote-b](http://localhost:3000/remote-b)

### Expected Behavior

The routes should load and display content from `remote_a` and `remote_b`.

### Actual Behavior

An error appears when navigating to the specified routes.

```
ERROR
Script error.
    at handleError (http://localhost:3000/styles.js:1772:58)
    at http://localhost:3000/styles.js:1791:7
    at Object.invokeGuardedCallbackDev (http://localhost:3000/vendor.js:16260:16)
    at invokeGuardedCallback (http://localhost:3000/vendor.js:16324:31)
    at beginWork$1 (http://localhost:3000/vendor.js:39532:7)
    at performUnitOfWork (http://localhost:3000/vendor.js:38638:12)
    at workLoopConcurrent (http://localhost:3000/vendor.js:38624:5)
    at renderRootConcurrent (http://localhost:3000/vendor.js:38586:7)
    at performConcurrentWorkOnRoot (http://localhost:3000/vendor.js:37819:38)
    at workLoop (http://localhost:3000/vendor.js:47762:34)

vendor.js:27533 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. Error Component Stack
    at Matches (Matches.tsx:204:18)
    at RouterContextProvider (RouterProvider.tsx:61:3)
    at RouterProvider (RouterProvider.tsx:93:5)
    at div (<anonymous>)
    at App (<anonymous>)
    at div (<anonymous>)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at Suspense (<anonymous>)
    at OutletImpl (vendor.js:4380:41)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at CatchBoundaryImpl (vendor.js:4063:5)
    at CatchBoundary (vendor.js:4043:32)
    at MatchesInner (vendor.js:4609:52)
    at Suspense (<anonymous>)
    at Matches (vendor.js:4599:41)
    at RouterContextProvider (vendor.js:4701:3)
    at RouterProvider (vendor.js:4720:27)
    at div (<anonymous>)
    at div (<anonymous>)
    at div (<anonymous>)
    at App (<anonymous>)
overrideMethod @ hook.js:608
printWarning @ react.development.js:209
error @ react.development.js:183
resolveDispatcher @ react.development.js:1592
useContext @ react.development.js:1602
useRouter @ useRouter.tsx:9
Matches @ Matches.tsx:204
renderWithHooks @ vendor.js:27533
mountIndeterminateComponent @ vendor.js:32145
beginWork @ vendor.js:33668
beginWork$1 @ vendor.js:39507
performUnitOfWork @ vendor.js:38638
workLoopConcurrent @ vendor.js:38624
renderRootConcurrent @ vendor.js:38586
performConcurrentWorkOnRoot @ vendor.js:37819
workLoop @ vendor.js:47762
flushWork @ vendor.js:47735
performWorkUntilDeadline @ vendor.js:48029
Show 7 more frames
Show lessUnderstand this errorAI
vendor.js:27533 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. Error Component Stack
    at Matches (Matches.tsx:204:18)
    at RouterContextProvider (RouterProvider.tsx:61:3)
    at RouterProvider (RouterProvider.tsx:93:5)
    at div (<anonymous>)
    at App (<anonymous>)
    at div (<anonymous>)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at Suspense (<anonymous>)
    at OutletImpl (vendor.js:4380:41)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at CatchBoundaryImpl (vendor.js:4063:5)
    at CatchBoundary (vendor.js:4043:32)
    at MatchesInner (vendor.js:4609:52)
    at Suspense (<anonymous>)
    at Matches (vendor.js:4599:41)
    at RouterContextProvider (vendor.js:4701:3)
    at RouterProvider (vendor.js:4720:27)
    at div (<anonymous>)
    at div (<anonymous>)
    at div (<anonymous>)
    at App (<anonymous>)
overrideMethod @ hook.js:608
printWarning @ react.development.js:209
error @ react.development.js:183
resolveDispatcher @ react.development.js:1592
useContext @ react.development.js:1602
useRouter @ useRouter.tsx:9
Matches @ Matches.tsx:204
renderWithHooks @ vendor.js:27533
mountIndeterminateComponent @ vendor.js:32145
beginWork @ vendor.js:33668
callCallback @ vendor.js:16211
invokeGuardedCallbackDev @ vendor.js:16260
invokeGuardedCallback @ vendor.js:16324
beginWork$1 @ vendor.js:39532
performUnitOfWork @ vendor.js:38638
workLoopConcurrent @ vendor.js:38624
renderRootConcurrent @ vendor.js:38586
performConcurrentWorkOnRoot @ vendor.js:37819
workLoop @ vendor.js:47762
flushWork @ vendor.js:47735
performWorkUntilDeadline @ vendor.js:48029
Show 7 more frames
Show lessUnderstand this errorAI
react.development.js:1618 Uncaught TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (react.development.js:1618:1)
    at useRouter (useRouter.tsx:9:17)
    at Matches (Matches.tsx:204:18)
    at renderWithHooks (vendor.js:27533:18)
    at mountIndeterminateComponent (vendor.js:32145:13)
    at beginWork (vendor.js:33668:16)
    at HTMLUnknownElement.callCallback (vendor.js:16211:14)
    at Object.invokeGuardedCallbackDev (vendor.js:16260:16)
    at invokeGuardedCallback (vendor.js:16324:31)
    at beginWork$1 (vendor.js:39532:7)
useContext @ react.development.js:1618
useRouter @ useRouter.tsx:9
Matches @ Matches.tsx:204
renderWithHooks @ vendor.js:27533
mountIndeterminateComponent @ vendor.js:32145
beginWork @ vendor.js:33668
callCallback @ vendor.js:16211
invokeGuardedCallbackDev @ vendor.js:16260
invokeGuardedCallback @ vendor.js:16324
beginWork$1 @ vendor.js:39532
performUnitOfWork @ vendor.js:38638
workLoopConcurrent @ vendor.js:38624
renderRootConcurrent @ vendor.js:38586
performConcurrentWorkOnRoot @ vendor.js:37819
workLoop @ vendor.js:47762
flushWork @ vendor.js:47735
performWorkUntilDeadline @ vendor.js:48029
Show 3 more frames
Show lessUnderstand this errorAI
vendor.js:27533 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. Error Component Stack
    at Matches (Matches.tsx:204:18)
    at RouterContextProvider (RouterProvider.tsx:61:3)
    at RouterProvider (RouterProvider.tsx:93:5)
    at div (<anonymous>)
    at App (<anonymous>)
    at div (<anonymous>)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at Suspense (<anonymous>)
    at OutletImpl (vendor.js:4380:41)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at CatchBoundaryImpl (vendor.js:4063:5)
    at CatchBoundary (vendor.js:4043:32)
    at MatchesInner (vendor.js:4609:52)
    at Suspense (<anonymous>)
    at Matches (vendor.js:4599:41)
    at RouterContextProvider (vendor.js:4701:3)
    at RouterProvider (vendor.js:4720:27)
    at div (<anonymous>)
    at div (<anonymous>)
    at div (<anonymous>)
    at App (<anonymous>)
overrideMethod @ hook.js:608
printWarning @ react.development.js:209
error @ react.development.js:183
resolveDispatcher @ react.development.js:1592
useContext @ react.development.js:1602
useRouter @ useRouter.tsx:9
Matches @ Matches.tsx:204
renderWithHooks @ vendor.js:27533
mountIndeterminateComponent @ vendor.js:32145
beginWork @ vendor.js:33668
beginWork$1 @ vendor.js:39507
performUnitOfWork @ vendor.js:38638
workLoopSync @ vendor.js:38547
renderRootSync @ vendor.js:38515
recoverFromConcurrentError @ vendor.js:37931
performConcurrentWorkOnRoot @ vendor.js:37831
workLoop @ vendor.js:47762
flushWork @ vendor.js:47735
performWorkUntilDeadline @ vendor.js:48029
Show 7 more frames
Show lessUnderstand this errorAI
vendor.js:27533 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. Error Component Stack
    at Matches (Matches.tsx:204:18)
    at RouterContextProvider (RouterProvider.tsx:61:3)
    at RouterProvider (RouterProvider.tsx:93:5)
    at div (<anonymous>)
    at App (<anonymous>)
    at div (<anonymous>)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at Suspense (<anonymous>)
    at OutletImpl (vendor.js:4380:41)
    at component (<anonymous>)
    at MatchInnerImpl (vendor.js:4296:3)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at SafeFragment (vendor.js:4740:156)
    at MatchImpl (vendor.js:4239:3)
    at CatchBoundaryImpl (vendor.js:4063:5)
    at CatchBoundary (vendor.js:4043:32)
    at MatchesInner (vendor.js:4609:52)
    at Suspense (<anonymous>)
    at Matches (vendor.js:4599:41)
    at RouterContextProvider (vendor.js:4701:3)
    at RouterProvider (vendor.js:4720:27)
    at div (<anonymous>)
    at div (<anonymous>)
    at div (<anonymous>)
    at App (<anonymous>)
overrideMethod @ hook.js:608
printWarning @ react.development.js:209
error @ react.development.js:183
resolveDispatcher @ react.development.js:1592
useContext @ react.development.js:1602
useRouter @ useRouter.tsx:9
Matches @ Matches.tsx:204
renderWithHooks @ vendor.js:27533
mountIndeterminateComponent @ vendor.js:32145
beginWork @ vendor.js:33668
callCallback @ vendor.js:16211
invokeGuardedCallbackDev @ vendor.js:16260
invokeGuardedCallback @ vendor.js:16324
beginWork$1 @ vendor.js:39532
performUnitOfWork @ vendor.js:38638
workLoopSync @ vendor.js:38547
renderRootSync @ vendor.js:38515
recoverFromConcurrentError @ vendor.js:37931
performConcurrentWorkOnRoot @ vendor.js:37831
workLoop @ vendor.js:47762
flushWork @ vendor.js:47735
performWorkUntilDeadline @ vendor.js:48029
Show 7 more frames
Show lessUnderstand this errorAI
react.development.js:1618 Uncaught TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (react.development.js:1618:1)
    at useRouter (useRouter.tsx:9:17)
    at Matches (Matches.tsx:204:18)
    at renderWithHooks (vendor.js:27533:18)
    at mountIndeterminateComponent (vendor.js:32145:13)
    at beginWork (vendor.js:33668:16)
    at HTMLUnknownElement.callCallback (vendor.js:16211:14)
    at Object.invokeGuardedCallbackDev (vendor.js:16260:16)
    at invokeGuardedCallback (vendor.js:16324:31)
    at beginWork$1 (vendor.js:39532:7)
useContext @ react.development.js:1618
useRouter @ useRouter.tsx:9
Matches @ Matches.tsx:204
renderWithHooks @ vendor.js:27533
mountIndeterminateComponent @ vendor.js:32145
beginWork @ vendor.js:33668
callCallback @ vendor.js:16211
invokeGuardedCallbackDev @ vendor.js:16260
invokeGuardedCallback @ vendor.js:16324
beginWork$1 @ vendor.js:39532
performUnitOfWork @ vendor.js:38638
workLoopSync @ vendor.js:38547
renderRootSync @ vendor.js:38515
recoverFromConcurrentError @ vendor.js:37931
performConcurrentWorkOnRoot @ vendor.js:37831
workLoop @ vendor.js:47762
flushWork @ vendor.js:47735
performWorkUntilDeadline @ vendor.js:48029
Show 3 more frames
Show lessUnderstand this errorAI
vendor.js:30751 The above error occurred in the <Matches> component:

    at Matches (http://localhost:4201/vendors-node_modules_tanstack_react-router_dist_esm_index_js.js:4213:18)
    at RouterContextProvider (http://localhost:4201/vendors-node_modules_tanstack_react-router_dist_esm_index_js.js:4312:3)
    at RouterProvider (http://localhost:4201/vendors-node_modules_tanstack_react-router_dist_esm_index_js.js:4331:27)
    at div
    at App
    at div
    at component
    at MatchInnerImpl (http://localhost:3000/vendor.js:4296:3)
    at SafeFragment (http://localhost:3000/vendor.js:4740:156)
    at SafeFragment (http://localhost:3000/vendor.js:4740:156)
    at SafeFragment (http://localhost:3000/vendor.js:4740:156)
    at MatchImpl (http://localhost:3000/vendor.js:4239:3)
    at Suspense
    at OutletImpl (http://localhost:3000/vendor.js:4380:41)
    at component
    at MatchInnerImpl (http://localhost:3000/vendor.js:4296:3)
    at SafeFragment (http://localhost:3000/vendor.js:4740:156)
    at SafeFragment (http://localhost:3000/vendor.js:4740:156)
    at SafeFragment (http://localhost:3000/vendor.js:4740:156)
    at MatchImpl (http://localhost:3000/vendor.js:4239:3)
    at CatchBoundaryImpl (http://localhost:3000/vendor.js:4063:5)
    at CatchBoundary (http://localhost:3000/vendor.js:4043:32)
    at MatchesInner (http://localhost:3000/vendor.js:4609:52)
    at Suspense
    at Matches (http://localhost:3000/vendor.js:4599:41)
    at RouterContextProvider (http://localhost:3000/vendor.js:4701:3)
    at RouterProvider (http://localhost:3000/vendor.js:4720:27)
    at div
    at div
    at div
    at App

React will try to recreate this component tree from scratch using the error boundary you provided, CatchBoundaryImpl.
```

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

The routes should load and display content from `remote_a` and `remote_b` without warning/error logs.

### Actual Behavior

An warning/error log appears when navigating to the specified routes.

```
hook.js:608 Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported. Error Component Stack
    at RouterContextProvider (RouterProvider.tsx:61:3)
    at RouterProvider (RouterProvider.tsx:93:5)
    at div (<anonymous>)
    at App (<anonymous>)
    
vendor.js:10160 Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported. Error Component Stack
    at RouterContextProvider (vendor.js:8967:3)
    at RouterProvider (vendor.js:8986:27)
    at div (<anonymous>)
    at div (<anonymous>)
    at div (<anonymous>)
    at App (<anonymous>)
```

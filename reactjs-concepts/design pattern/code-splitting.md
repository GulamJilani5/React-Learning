# ⏺️ Code Splitting

`https://medium.com/@shriharim006/code-splitting-in-react-optimize-performance-by-splitting-your-code-e3e70d0c3d91#:~:text=Code%20splitting%20is%20a%20powerful,built%2Din%20tools%20like%20React`

### ➡️ Method 1:

- React.lazy() with Suspense

```js
const LazyComponent = lazy(() => import("./LazyComponent"));
const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
```

### ➡️ Method 2:

- Dynamic Import with Webpack

```js
handleClick = async () => {
  const module = await import("./DynamicComponent");
  // Do something with the dynamically imported module
};
```

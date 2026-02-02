# ⏺️ ERROR HANDLING

- These methods are called when an error occurs during rendering, in a lifecycle method, or in a constructor of
- any child component. static getDerivedStateFromError(error): Used to update the state so the next render shows a fallback UI. componentDidCatch(error, info): Used to log error information.

### ➡️ Error Boundry

- `https://blog.logrocket.com/react-error-handling-react-error-boundary`

### ➡️ Error handling

- `https://blog.logrocket.com/8-common-react-error-messages-how-address-them`

##### 🟦 Method 1

- In class component we can catch it using the life cycle Method
  - 1. getDerivedStateFromError(): This lifecycle method renders a fallback UI after an error is thrown.
       It is called during the render phase, so side effects are not permitted
  - 2. componentDidCatch(): This method is used to log error information. It is called during the commit phase,
       so side effects are permitted

##### 🟦 Method 2

- `react-error-boundary library`
  - It works well with functional component

```js
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // reset the state of your app here
      }}
      resetKeys={["someKey"]}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}
/// <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorToService}></ErrorBoundary> _/
```

##### 🟦 Method 3

- `react-router-dom`
  - path, element, errorElement

##### 🟦 Method 4

- Create error component and wrap our component inside the component

##### 🟦 Method 5

- Error fallback component

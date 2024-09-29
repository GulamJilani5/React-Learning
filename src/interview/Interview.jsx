/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Reactjs To Crack Any Interview
////////////////////////////////

/********************************************************************************************************
*******************Interview Coding Questions in Reactjs (Practical)**********************
******************************************************************************
***1. Form - textbox, checkbox and radio button, dropdwon(select options)
***2. Hooks - useState, useEffect, useContext, useReducer, useMemo, useCallback
***3. API Call and map function to render data on UI.
******************************************************************************
/*********************************************************************************************************/

/*********************************************************************************************************
***********************************Advance Feature in Reactjs****************
******************************************************************************
***1. Reactjs 18 features
***2. reactjs 19 feature - hooks and other features
***3. ERROR HANDLING
***4. Code Splitting
***5. Authenticated - Protected Route
***6. State Management -redux thunk and redux saga.
***7. Types Of Component component(SSR, CSR, SSG, ISG )
*******************************************************************************
/**********************************************************************************************************/

/*********************************************************************************************************
***********************************Topics to explore in Reactjs******************
*********************************************************************************
***1. Authentication: JWT, OAuth2.
***2. Security Best Practices: HTTPS version, CORS, XSS prevention, CSRF.
***3. Encryption: SSL/TLS, Hashing (bcrypt).
***4. Storage: localStorage, sessionStorage, indexDB, Caching(service wroker), Cooking,
***5. Networking:  webSockket, server Sent event.
***5. Worker Threads, Service Worker(Caching)
**********************************************************************************
***********************************************************************************************************

***1. Reactjs 18 features
***2. reactjs 19 feature - hooks and other features
***3. ERROR HANDLING
***4. Code Splitting
***5. Authenticated - Protected Route
***6. Server component vs client component(SSR, CSR, SSG, ISG etc)
*******************************************************************************
/**********************************************************************************************************/
/****************************************************************************************************
 *********Reactjs 18 features
 ***********1. Automatic Batching (see AccentureInterview.jsx DOM vs RealDOM)
 ********** 2. Concurrent Rendering
 ********** 3. Suspense for Data Fetching(Susspense Fallback)
 ********** 4. React Server Components
 ********** 5. Improved SSR and Hydration
 ********** 6. New Root API
 ********** 7. useId Hook
 ********** 8. startTransition API
 *******************************************************************************************************/

/****************************************************************************************************
 *********Reactjs 19 features
 ** https://react.dev/blog/2024/04/25/react-19
 ** Server Actions NextJS 14 - https://blog.logrocket.com/diving-into-server-actions-next-js-14
 ***********1. Actions. Server Actions and Server Component
 ********** 2. React DOM: <form> Actions
 ********** 3. useActionState
 ********** 4. React DOM: New hook: useFormStatus
 ********** 5. New hook: useOptimistic
 ********** 6. New API: use
 ********** 7. Diffs for hydration errors
 ********** 8. Cleanup functions for refs
 ********** 9. useDeferredValue initial value
 ********** 10. Support for Document Metadata
 ********** 11. Support for stylesheets
 ********** 12. Support for async scripts
 ********** 13. Support for preloading resources
 ********** 14. Compatibility with third-party scripts and extensions
 ********** 15. Better error reporting
 ********** 16. Support for Custom Elements
 *******************************************************************************************************/

//**********************Reactjs Lifecycle ***********************/
// React component lifecycle methods are functions that are called at different stages of a component's lifecycle.

/********* 1. MOUNTING: *************/
// These methods are called when an instance of a component is being created and inserted into the DOM.
// componentDidMount()
useEffect(() => {
  // Code to run on mount
}, []); // Empty dependency array ensures it runs only once

/********* 3. UPDATING: *************/
// These methods are called when the component is being re-rendered due to changes in props or state.
// componentDidUpdat()
useEffect(() => {
  // Code to run on update
}, [dependency]); // Runs when 'dependency' changes

/********* 3. UNMOUNTING *************/
// These methods are called when a component is being removed from the DOM.
// componentWillUnmount()
useEffect(() => {
  return () => {
    // Cleanup code to run on unmount
  };
}, []); // Empty dependency array ensures cleanup runs on unmount

/********* 3. ERROR HANDLING *************/
// These methods are called when an error occurs during rendering, in a lifecycle method, or in a constructor of
// any child component. static getDerivedStateFromError(error): Used to update the state so the next render shows
// a fallback UI. componentDidCatch(error, info): Used to log error information.

/*******************************************************************************************************
 ***** Error Boundry -  https://blog.logrocket.com/react-error-handling-react-error-boundary/
 ****  Error handling - https://blog.logrocket.com/8-common-react-error-messages-how-address-them/
 ********************************************************************************************************/
///// Method 1
// In class component we can catch it using the life cycle Method
//1.  getDerivedStateFromError(): This lifecycle method renders a fallback UI after an error is thrown.
//   It is called during the render phase, so side effects are not permitted
//2. componentDidCatch(): This method is used to log error information. It is called during the commit phase,
//   so side effects are permitted

///// Method 2
// react-error-boundary library - It works well with functional component
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
//   /* <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorToService}></ErrorBoundary> */

///// Method 3
// react-router-dom - path, element, errorElement

///// Method 4
// Create error component and wrap our component inside the component

///// Method 5
// Error fallback component

/*******************************************************************************************************
 ***** Code Splitting -
  https://medium.com/@shriharim006/code-splitting-in-react-optimize-performance-by-splitting-your-code-e3e70d0c3d91#:~:text=Code%20splitting%20is%20a%20powerful,built%2Din%20tools%20like%20React.
 ********************************************************************************************************/
///// Method 1:
//  React.lazy() with Suspense
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

///// Method 2:
//Dynamic Import with Webpack
handleClick = async () => {
  const module = await import("./DynamicComponent");
  // Do something with the dynamically imported module
};

/*******************************************************************************************************
 **Authentication or protected route -
     https://blog.logrocket.com/adding-login-authentication-secure-react-apps/
 **Authentication with redux toolkit and Redux toolkit Query -
     https://blog.logrocket.com/handling-user-authentication-redux-toolkit/
 ********************************************************************************************************/
//Token based authentication
//   storing the token on the local storage and access the protected resources
//   Session based authentication - server side

// Server store the cookies and client accordingly access the only after logged in

///////////////////////////////////////////
/////////////////////
///////////
// React lifecylce
// Server component vs client component(SSR, CSR etc)
// Reactjs 18 features
// reactjs 19 feature - hooks and other features

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
 ********** 3. seActionState
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
// These methods are called when an error occurs during rendering, in a lifecycle method, or in a constructor of any child component.
// static getDerivedStateFromError(error): Used to update the state so the next render shows a fallback UI.
// componentDidCatch(error, info): Used to log error information.

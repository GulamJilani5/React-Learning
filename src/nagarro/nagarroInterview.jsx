////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
///////////////////  These questions was asked me into the interview

/************************** ReactJS ******************************************************/
///// Round 1
//1. How and where can we cancel the netwrok request in reactjs
//2. why do we need the redux thunk or redux saga if we already have axios or fetch for api call
//3.  is side effect or api call are the same or different.
//4. Chatbox coding exercise- header on top, main(messaging sent and received area) contains all the remaining spaces,
//          footer on bottom.
//5.We can use interceptor in reactjs, How it is related to custom hook

///// Round 2
//1. put patch and post
//2. what is mocking testing.
//3. useContext, useReducer, useRef
//4. What is memoization
/************************** JavaScript ******************************************************/
///// Round 2
//1. Call, apply, bind
//2. Currying
//3. What is prototype
/************************** Nodejs ******************************************************/
///// Round 2
//1. steam and buffer
//2. nodejs event loop
//3. fork vs spawn
//4. SOLID Principle

/************************** CSS ******************************************************/
///// Round 1
//1. what is preprocessor, which preprocessor are you using sass or less.
//2. what is mixin and tell the syntax of it
//3. difference between css custom variable and sass varibale
//4. difference between rem and em units.

///// Round 2
//1. what is mixin

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
///////////////////  These questions are important for nagarro point of view

/************************** ReactJS ******************************************************/
//1. What is code splitting in reactjs
//2. how do you handle authentication in reactjs. What is protected route and how to implement it
//3. What is error boundry in ReactJS.
//4. Difference between redux saga and redux thunk
//5. explain the interceptor features avaialable in the axios

/************************** Javascript ******************************************************/
//1. What is web workers, service workers, webpack and Caching Strategies.
//2. what will happend if we call generator function without next method
//3. different technique of creating objects.
//   why do prefer Object.create(). Explain advantage

/************************** CSS ******************************************************/
//1. what is preprcessor in css
//2. Steps for adding preprocessor(sass) in our reactjs project.
//3. What is BEM
//4. What is Specificty
//5. Explain css3 and html5 features with an example

/*******************************************************************************************************
 ***** Error Boundry - https://blog.logrocket.com/react-error-handling-react-error-boundary/
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
 ***** Code Splitting - https://medium.com/@shriharim006/code-splitting-in-react-optimize-performance-by-splitting-your-code
                        -e3e70d0c3d91#:~:text=Code%20splitting%20is%20a%20powerful,built%2Din%20tools%20like%20React.
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
 ***** Authentication or protected route - https://blog.logrocket.com/adding-login-authentication-secure-react-apps/
 ********************************************************************************************************/
//Token based authentication
//   storing the token on the local storage and access the protected resources
// Session based authentication - server side

// Server store the cookies and client accordingly access the only after logged in

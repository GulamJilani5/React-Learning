////// CRA:
// Out-of-the-box Jest and React Testing Library setup.
// Minimal configuration required.
// Use npm test or yarn test to run tests.

/////// Vite:
// Requires manual setup for Jest and React Testing Library.
// More flexibility in configuration.
// Use npm test or yarn test after setting up Jest.
// jest.config.js and .babelrc file in the root directory.

///// Watch Usage
//a  to run all test cases
//f  to run only failed cases
//q to quit watch mode
//p to filter by a filename regex pattern
//t to filter by a test name regex expression

///// 1) Can we test multiple component in a single file.
// yes we can test multiple component or function in a single file(test suites).

/////Jest
//1. test(name, fn, timeout)
//2. expect() - .toBe(), .toBeNull(), .toBeTruthy(), .toContain(item),.toEqual(value), .toMatch(regexp | string)
// assert - expect(el).toBeIntheDocument()

/////React testing library
//1. render - rendering the component which we want to test
//2. screen - .getByText, .getByTitle, toHaveAttribute(), getByrole, getByTestId
//3. fireEvent() - change, click

///// Grouping the test
// describe() function - only method or skip method etc...

/**********************Input field, it's attribute, button and event ****************************************/
// we can test the input box, placeholder, id, type and input box's presence.
// to test the value attribute it will give and warning because 'value' attribute is dynamic so
// fireEvent - it's better to test input fields with onChange(keyboard event like typing) otherwise pass readyon
//             props.
// click event on button - what is the output of the button

/***************************filename for testing************************************************************/
//file: file_name.test.js, file_name.test.jsx, file_name.spec.js, file_name.spec.jsx
//folder: __test__ (inside this folder we can have name like regular javascript eg. example.js)

/***************************Before and After Hooks in jest******************************************************/
// Sometimes before and after running the test we need to clean the db, setting up the environment and sometimes to
// create some constants
//1. beforeAll, beforeEach - test cases run hone ke pahle
//2. afterAll,  afterEach  - test cases run hone ke bad

/***************************Snapshot Testing******************************************************/
// __snapshot__ --> App.test.js.snap
// Captures the output of a component or function and compares it in future runs.
// We should do snapshot testing just before the production

/*****************************************************************************************************
 *** Class Component Testing
 *****************************************************************************************************/
// npm i react-test-renderer - It gives instance of the class component so that we can access all of it's
// properties and values.

/********************************************************************************************************
 *** Functional Component's method Testing
 * ******************************************************************************************************/
// functional component has two types of method
//1. method that is called on certian event - Easier to test
//2. method that is performaing some block of code but without associated with any event. - Place into another file
//   and import into component. Test them separetly as normal javascript function. But mostly not required to test.
// Method that is associated with any event are easier to test.

/**************************************************************************************************************
 *** Text Match
 * ***********************************************************************************************************/
// String
// screen.getByText("Hello", {exact: false});

// Regex
// screen.getByText(/hello/)

// function
// const el = screen.getByText((content, element) => content.includes("hello"));
// endWith(), startWidth()

/****************************************************************************************************************
 *** User Event Library
 ****************************************************************************************************************/
// User Event library(version14) work along with React testing library
// UEL - provides user interaction asynchronously(we use async await ) instead of the concrete event,
//       unlike fireEvent which does not work well with onchange and other event.
// userEvent.setUp()

////// act function -
// first update the state then assert function will work.
// We wrap the userevent inside the act function.

/****************************************************************************************************************
 *** Testing the props using Mock function, Mock Service Worker
 ****************************************************************************************************************/
// We can easily test the the props of the component if it is number or string.
// If Props is function then we can test is using mocking funciton
/////// Mocking - process of creating simulated versions of objects, functions, api or components in order to
///////           test specific parts of an application in isolation.
// jest.fn() - mocking a function - passing a function as a props from the testing file to our own component.
// toBeCalled() - check wheather our function is called or not on click when function is coming from the
//                props or not.
///////////// MSW - mock service worker, making a dummy function or api response for testing.
/////////           alternate of MSW is jest as well.
////// Install msw library, create services for msw.
////   create folder mockServices and below two files inside the mockServices.
////   server.js - setupServer()
///    handler.js

/****************************************************************************************************************
 *** Debugging in react testing library
 ****************************************************************************************************************/
//////automatic debugging - error that is visible on the console is known as automatic debugging.
//// Destructure the 'container' from the 'render' function
//// prettyDOM - displaying the html from the component conatiner. eg prettyDOM(conainer)
//// debug() same as prettyDOM()
//// DEBUG_PRINT_LIMIT = 1000 npm test, default limit is 7000.
//// logRoles - separate the html so that easy to read. eg. logRoles(container)

//////////////////////////testing playground
/////tool for react testing library to write better test cases. Install this tesing playground extension
//   on chrome. It will give the all possible way to select element and test it

/***********************************************************************************************************
 *** RTL Query
 ************************************************************************************************************/
//// RTL query are use to test the ui elements
///  we can test by element name, id, type,  test id
//////////////Steps to test with RTL Query
/////////////// 1) Render the component - render(<App/>)
/////////////// 2) find the element and action - getByrole()
//                                      action is optional - fireEvent.click(btn)
/////////////////////// 1) Assertions -  expect(el).toBeIntheDocument()
// Assert - expect(el)
// Assertion methods(can have positive and negative checking) - toBeIntheDocument(), toHaveValue(),
// toHaveAttribute(), toBeEnabled(), toBeDisabled(), toHaveClass().
///// Negative checking - .not. (eg,.  expect(el).not.toHaveClass())
///////////////single element
////////////getBy, queryBy, findBy
////////////// multiple element
/////////// getAllBy,queryAllBy,findAllBy
// semantic elements have predefined role, but for non-semantic elements we should provide custom role.
// input field - textbox, button - button
//We can configure the getByTestId with the help of custom 'data-testid' attribute

///////////////////// queryBy and queryAllBy
// To test when an element is present in the code but not visible on the UI.

///////////////////// findBy and findAllBy
// To test when data is loading from the api and taking time.

/////////////////////Custom Query
//other than getBY, Query, and findBy, we can use js custom query the way we select element using querySelector.

//////////////////// Querying within element
// finding element within element
//let el = screen.getByText("Hello World");
//let subEl = wihtin(el).getByText("hi");

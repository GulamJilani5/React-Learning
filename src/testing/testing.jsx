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
//a to run all test cases
//f to run only failed cases
//q to quit watch mode
//p to filter by a filename regex pattern
//t to filter by a test name regex expression

///// 1) Can we test multiple component in a single file.
// yes we can test multiple component or function in a single file(test suites). getByrole - textbox.
// assert - expect(el).toBeIntheDocument()
// we can test the input box, placeholder, id, type and input box's presence.
// We can also test onChange(keyboard event like typing) or other event - fireEvent.
// click event on button - what is the output of the button

// User Event library(version14) work along with React testing library
// UEL - provides user interaction asynchronously instead of the concrete event, unlike fireEvent.
// userEvent.setUp()
////// act function - first update the state then assert function will work.

///////////Testing the props
/////////MSW - mock service worker, making a dummy function or api response for testing.
/////// Mocking - process of creating simulated versions of objects, functions, or components in order to
/////// test specific parts of an application in isolation.
/////////// alternate of MSW is jest as well.
// jest.fn() - mocking a function - passing a function as a props from the testing file to our own component.
// toBeCalled() - check wheather our function is called or not on click when function is coming from the
//                props or not.

//////////////automatic debugging - error that is visible on the console is known as automatic debugging.
////////////// prettyDOM - displaying the html from the component conatiner
///////////////debug() same as prettyDOM()
//////////////DEBUG_PRINT_LIMIT = 1000 npm test, default limit is 7000.
///////////// logRoles - separate the html so that easy to read.

//////////////////////////testing playground -
///////////////////////////tool for react testing library to write better test cases.
/////////// install tha tesing playground extension on chrome. It will give the best possible testing for each
/////////// elements.

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////
///////////////////////////RTL query - to test the ui elements
////////////////////// we can test by element name, id, type
//////////////
/////////////////////// Steps to test with RTL Query
/////////////////////// 1) Render the component - render(<App/>)
/////////////////////// 2) find the element and action - getByrole()
/////////////////////// 1) Assertions -  expect(el).toBeIntheDocument()

/////////////////////// Types of RTL Query
////////////////////single element
////////////////// getBy, queryBy, findBy
/////////////////// multiple element
///////////////////getAllBy,queryAllBy,findAllBy

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////
/////////////////////// tesing the api
////////////////
//////////
////// install msw library, create services for msw
////create folder mockServices and below two files inside the mockServices
////server.js - setupServer()
/// handler.js

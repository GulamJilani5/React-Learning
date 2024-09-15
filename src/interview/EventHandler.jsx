/*********************************************************************************************************
 *************** Key Concepts of Event Handlers in ReactJS
 *********************************************************************************************************/

// 1) Synthetic Events:
//      React creates a wrapper around the browser's native events, known as synthetic events. This wrapper
//      provides a consistent interface across different browsers, ensuring cross-browser compatibility.

/// 2) Binding Event Handlers:
//      inline functions,  or separate functions that are passed as props.

// 3) Handling Events in Functional Components:
//      Functional components use hooks like useState and useCallback
//      to manage state and optimize event handler performance.

// 4) Handling Events in Class Components:
//      In class components, event handlers are often defined as methods
//      and may need to be bound to the component instance to maintain the correct this context.

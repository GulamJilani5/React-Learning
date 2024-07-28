import React from "react";

import { useEffect } from "react";

export default function UseEffect() {
  return <div>UseEffect</div>;
}

///
/// react has two types of component
// and component has life cycle mehtod

/// 1) class component
/// a) componetDidMount() - initial render(first render, first painted on browser)

/// 1) class component
/// a) componnetDidMount() - initial render(first render, first painted on browser)
/// b) componentDidUpdate() - props and state get change
/// c) componentWillUnmount() - removing a component from the browser, cleanup code goes here.

/// 2) functional componennt
// useEffect() - it handle all life cycle methods.
// [] - depenedency array
// 3 types
// 1) no dependency array.

/*
 useEffect(()=>{

 })
 */
// run in initial render as well as after every rerender

// 2) empty dependency array. eg. []
/*
 useEffect(()=>{
     // fetchData()
 }, [])
 */

// useEffect(() => {});
// run in initial render and after every rerender

// 2) empty dependency array. eg. []
// useEffect(() => {
//   // fetchData()
// }, []);
// componnetDidMount()
// run only initial render

// 3) some variable or state or props in dependency array. eg. [count, apiID]

/*
 useEffect(()=>{
   
 }, [count, state, props])
*/

// useEffect(() => {}, [count, state, props]);
// run on initial render as well as whenever dependency array value changed

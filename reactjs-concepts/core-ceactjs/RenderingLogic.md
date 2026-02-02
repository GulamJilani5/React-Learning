⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ React Re-Rendering Logic

## ➡️ General re-rendering idea Start

- **Initial Render:**
  - When a component (e.g. ParentComponent) is initially rendered, React renders its children components
    (e.g. SomeComponent) as part of its JSX.
- **Subsequent Renders:**
  - When ParentComponent re-renders, React will also re-render SomeComponent as part of the process.
  - This occurs regardless of whether SomeComponent has props or not.

## ➡️ Scenarios and Corner Cases With an Parent Component and Child Component(eg. SomeComponent) Example

### 🟦 EXAMPLE 1

#### 🔵 1.SomeComponent Without Props

If SomeComponent does not receive any props from ParentComponent, then:

- **2.1 Re-rendering Behavior:**
  SomeComponent will re-render whenever ParentComponent re-renders. This is because React re-renders
  the entire component tree when a parent component renders, regardless of the child components' state or props.
- **2.2 Preventing Unnecessary Re-renders:**
  React.memo: You can use React.memo to optimize rendering. However, React.memo is most(only) useful for
  components that receive props. If someCompoent does not recieve any props from the parent component then
  React.memo() will not work into this scenario. Despite using React.memo, SomeComponent will still re-render
  whenever ParentComponent re-renders.

```js
 import React from "react"
///SomeComponent.jsx
 const SomeComponent = React.memo(() => {
 console.log("SomeComponent rendered");
 return <p>Some Component</p>;
 });

export default SomeComponent
import React, { useState } from 'react';
import SomeComponent from './SomeComponent'
///ParentComponent.jsx
function ParentComponent() {
const [count, setCount] = useState(0)
return (

 <div>
 <SomeComponent />
 <button onClick={() => setCount(count + 1)}>Increment</button>
 </div>
 );

 export default ParentComponent;
```

#### 🟦 EXAMPLE 2

##### 🔵 2. SomeComponent With Props

- If SomeComponent does not receive any props from ParentComponent, then:
- **2.1 Re-rendering Behavior:**
  SomeComponent will re-render when ParentComponent re-renders, even if the props passed to SomeComponent
  do not change. React treats the re-rendering of a parent component as a reason to re-render all its
  children components.
- **2.2 Preventing Unnecessary Re-renders:**
  SomeComponent will only re-render if the value prop changes. If value remains the same, React.memo
  will prevent the re-rendering.

- SomeComponent.jsx

```js
import React from "react";

const SomeComponent = React.memo(({ value }) => {
  console.log("SomeComponent rendered");
  return <p>Value: {value}</p>;
});
export default SomeComponent;
```

- ParentComponent.jsx

```js
import React, { useState } from "react";
import SomeComponent from "./SomeComponent";
function ParentComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <SomeComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default ParentComponent;
```

🔵 🟢 🔴 ➡️ ⏺️ ⭕ 🟠 🟦 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ React has two types of component

## ➡️ 1 class component

#### a componnetDidMount()

- initial render(first render, first painted on browser)

#### b componentDidUpdate()

- props and state get change

#### c componentWillUnmount()

- removing a component from the browser, cleanup code goes here.

## ➡️2. functional componennt

- Find `D:\Jilani\learning\React-Learning\src\hooks\UseEffect.jsx`

- **useEffect()**:
  - it handle all life cycle methods.
  - [] - depenedency array

- **3 types**

#### 🟦 A. no dependency array.

- **Behavior:** Runs on initial render and after every rerender.
- **Use Case:** When you need an effect to run every time the component updates (e.g., logging state changes).

```js
useEffect(() => {
  console.log("Effect runs on every render");
});
```

#### 🟦 B empty dependency array. eg. []

- **Behavior:** Runs only once after the initial render.
- **Use Case:** Similar to `componentDidMount`. Ideal for one-time setup, like fetching data when the component loads.

```js
useEffect(() => {
  // fetchData()
  console.log("Effect runs only once on mount");
}, []);
```

#### 🟦 C. Dependency Array with Variables ([count, apiID, ...])

- **Behavior:** Runs on initial render and whenever any dependency in the array changes.
- **Use Case:** Similar to `componentDidUpdate`. Useful for effects that depend on specific state or props (e.g., refetching data when a prop changes).

```js
useEffect(() => {
  console.log("Effect runs when count or apiID changes");
  // Example: fetch data based on apiID
}, [count, apiID]);
```

---

---

# ⏺️ Reactjs Lifecycle

### ➡️ React component lifecycle methods are functions that are called at different stages of a component's lifecycle.

##### 🟦 1. MOUNTING:

- These methods are called when an instance of a component is being created and inserted into the DOM.
- `componentDidMount()`

```js
useEffect(() => {
  // Code to run on mount
}, []); // Empty dependency array ensures it runs only once
```

##### 🟦 2. UPDATING:

- These methods are called when the component is being re-rendered due to changes in props or state.
- `componentDidUpdat()`

```js
useEffect(() => {
  // Code to run on update
}, [dependency]); // Runs when 'dependency' changes
```

##### 🟦 3. UNMOUNTING

- These methods are called when a component is being removed from the DOM.
- `componentWillUnmount()`

```js
useEffect(() => {
  return () => {
    // Cleanup code to run on unmount
  };
}, []); // Empty dependency array ensures cleanup runs on unmount
```

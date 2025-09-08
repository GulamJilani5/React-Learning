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

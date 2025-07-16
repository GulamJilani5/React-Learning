🟦🟦🔵🔷🟩🟢🟧
🟦 # Redux

- Redux is a predictable state container for JavaScript applications, most commonly used with React
- It helps to manage global application state in a consistent way.

### 🔵 Core Concepts of Redux

🔷 **Store:** The single source of truth that holds the entire state of your application.
🔷 **Actions:** Plain JavaScript objects that describe what happened in your app
🔷 **Reducers:** Pure functions that take the previous state and an action, and return the next state
🔷 **Dispatch:** The only way to update the state is to call store.dispatch() with an action
🔷 **Middleware:** Provides a third-party extension point between dispatching an action and the reducer

### 🔵 Important Redux Hooks

🔷**useSelector():** Extracts data from the Redux store state.  
🔷 **useDispatch():** Returns a reference to the dispatch function.
🔷 **useStore():** Returns a reference to the Redux store (rarely needed).

### 🔵 Redux Toolkit (Modern Redux)

🟢 Redux Toolkit (RTK) is the official, opinionated toolset for efficient Redux development.
**It includes:**<br>
🔷 **configureStore():** Sets up a Redux store with good defaults.<br>  
🔷 **createSlice():** Generates action creators and action types automatically.<br>  
🔷 **createAsyncThunk():** Handles async logic.<br>
🔷 **createEntityAdapter():** Manages normalized state.<br>  
🔷 **createSelector():** Creates memoized selectors (from Reselect).<br>

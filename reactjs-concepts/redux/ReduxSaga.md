⏺️ REDUX SAGA

- Redux Saga is a middleware library for handling side effects in Redux applications, such as data fetching,
- API calls, and other asynchronous tasks.

### ➡️ Saga:

- A generator function that yields objects to the Redux Saga middleware, instructing it to perform certain tasks (e.g., dispatch an action, delay execution, or call an API).

### ➡️ Effects:

- Plain JavaScript objects that contain instructions for the Redux Saga middleware to perform.
- Common effects include call, put, take, takeEvery, takeLatest, and delay.

### ➡️ Watcher Saga:

- A saga that watches for dispatched actions and triggers worker sagas.

### ➡️ Worker Saga:

- A saga that performs the actual side effect (e.g., API call) and dispatches further actions based on the result.

### ➡️ There 6 steps to work with redux saga

- Step 1: Creating Actions
- Step 2: Creating the Reducer \*\*\*\* Step 3: Creating the Saga
- Step 4: Setting Up the Store with Redux Saga Middleware
- Step 5: Connecting React Components to Redux
- Step 6: Integrating Redux Store with React

---

##### 🟦 Step 1: Creating Actions

- actions.js

```js
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});
```

##### 🟦 Step 2: Creating the Reducer

- reducer.js

```js
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actions";
const initialState = {
  loading: false,
  user: null,
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default userReducer;
```

##### 🟦 Step 3: Creating the Saga

- sagas.js

```js
 import { call, put, takeEvery } from 'redux-saga/effects';
 import axios from 'axios';
 import {
 FETCH_USER_REQUEST,
 fetchUserSuccess,
 fetchUserFailure,
 } from './actions'
// Worker saga
 function fetchUserSaga() {
 try {
 const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/1');
 yield put(fetchUserSuccess(response.data));
 } catch (error) {
 yield put(fetchUserFailure(error.message));
 }
 }
 //// Watcher saga
 function\* watchFetchUser() {
 yield takeEvery(FETCH_USER_REQUEST, fetchUserSaga);
 }
```

// export default watchFetchUser;

##### 🟦 Step 4: Setting Up the Store with Redux Saga Middleware

- store.js

```js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducer";
import watchFetchUser from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchUser);
export default store;
```

##### 🟦 Step 5: Connecting React Components to Redux

- App.js

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRequest } from "./actions";
const App = () => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state);
  return (
    <div>
      <button onClick={() => dispatch(fetchUserRequest())}>Fetch User</button>
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
export default App;
```

##### 🟦 Step 6: Integrating Redux Store with React

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
```

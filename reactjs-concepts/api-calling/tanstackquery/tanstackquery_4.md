⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ ADVANCED CONCEPTS

## ➡️ Query Cancellation

- If component unmounts:
  - API call is cancelled automatically
  - Prevents memory leaks

## ➡️ Prefetching

- Load data before user navigates:

```js
queryClient.prefetchQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

- Used in:
  - Dashboards
  - Hover-based navigation

## ➡️ Optimistic Updates

- UI updates before API responds

```js
onMutate: async (newUser) => {
  queryClient.setQueryData(["users"], (old) => [...old, newUser]);
};
```

- Faster UX
- Rollback on error

## ➡️ Error Handling & Retry

```
retry: 3
retryDelay: 2000
```

- Auto retry failed requests

## ➡️ Devtools (Debugging)

- `npm install @tanstack/react-query-devtools`
- Shows:
  - Cache
  - Queries
  - Status
  - Timings

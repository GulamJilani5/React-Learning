⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ INTERMEDIATE CONCEPTS

## ➡️ Pagination

```js
useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});
```

- Smooth page transitions
- No flicker

## ➡️

```js
useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});
```

- Used for:
  - Instagram feeds
  - Chat messages

## ➡️ Dependent Queries

- API 2 depends on API 1:

```js
useQuery({
  queryKey: ["user", id],
  queryFn: fetchUser,
  enabled: !!id,
});
```

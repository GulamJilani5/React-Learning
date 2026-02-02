⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ CORE CONCEPTS

## ➡️ useQuery – Fetching Data

- What just happened?
  - API called automatically
  - Loading handled
  - Error handled
  - Data cached

- No useEffect, no useState

```js
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";
  if (error) return "Error occurred";

  return data.map((user) => <div key={user.id}>{user.name}</div>);
}
```

### queryKey – Identity of Data

- It is `Cache key`
- Different keys = different cached data
- `queryKey: ["users"]`
- **Caching (Automatic)**
  - Data is stored in cache
  - Another component using same key won’t refetch

### queryFn

### Stale vs Fresh Data

```js
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000,
});
```

- Fresh → no refetch
- Stale → refetch allowed

#### Refetching Rules (Automatic Magic)

- TanStack Query can refetch when:
  - Window regains focus
  - Internet reconnects
  - Component remounts

## ➡️ useMutation - Create / Update / Delete

```js
const mutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries(["users"]);
  },
});
```

- invalidateQueries – Auto Refresh
  - Refetch fresh data not old data
- This replaces:
  - Redux action dispatch
  - Manual refetch logic

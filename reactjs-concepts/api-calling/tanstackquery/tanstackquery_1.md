⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ TanStack

- `npm install @tanstack/react-query`
- Cache + 🔄 Sync engine + API manager
- TanStack Query is a library that manages server data (API data) for React.
- What problem does TanStack Query solve
  - Before TanStack Query, we had to manage:
    - API calls(Fetching)
    - Loading state
    - Error state
    - Caching
    - Syncing
    - Refetching
    - Updating
    - Duplicate calls
- TanStack Query does all of this automatically.🔴

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyApp />
    </QueryClientProvider>
  );
}
```

- QueryClient is `The brain that stores all API data`.

## ➡️ Server State vs Client State

- TanStack Query = Server State
- Redux = Client State

### 🟦 Server State (TanStack Query)

- Data from backend
- Can become stale
- Shared across users
- Needs refetching
- Example

```
/users
/orders
/products
```

### 🟦 Client State (Redux / useState)

- UI-related
- Local to app
- Instant & predictable
- Example

```
isModalOpen
theme
selectedTab

```

⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️ Axios vs Fetch

| Feature         | Axios     | Fetch  |
| --------------- | --------- | ------ |
| JSON handling   | Auto      | Manual |
| Interceptors    | Yes       | No     |
| Error handling  | Automatic | Manual |
| Timeout         | Yes       | No     |
| Browser support | Needs lib | Native |

### ➡️ Axios

```java
import axios from "axios";

axios.post(
  "https://api.example.com/users",
  {
    name: "Jilani",
    role: "Developer"
  },
  {
    headers: {
      Authorization: "Bearer token123",
      "Content-Type": "application/json"
    }
  }
)
.then(res => console.log(res.data))
.catch(err => console.error(err));

```

### ➡️ Fetch

```java
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Authorization": "Bearer token123",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Jilani",
    role: "Developer"
  })
})
.then(res => {
  if (!res.ok) throw new Error("Failed");
  return res.json();
})
.then(data => console.log(data))
.catch(err => console.error(err));

```

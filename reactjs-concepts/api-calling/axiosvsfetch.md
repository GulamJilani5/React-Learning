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

##### 🟦 ENTERPRISE-GRADE(Reads URL + Fetches Data) using axios

```java
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Orders() {
  const { id } = useParams();               // path variable
  const [searchParams] = useSearchParams(); // query params

  const status = searchParams.get("status");
  const page = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`/api/users/${id}/orders`, {
        params: {
        status,
        page,
        pageSize
        }
    })
    .then(res => setOrders(res.data));
  }, [id, status, page, pageSize]);

  return (
    <div>
      <h2>User ID: {id}</h2>
      <h3>Status: {status}</h3>

      {loading && <p>Loading...</p>}

      {orders.map(order => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Amount: {order.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;

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

##### 🟦 ENTERPRISE-GRADE(Reads URL + Fetches Data) using Fetch

```java
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Orders() {
  const { id } = useParams();               // path variable
  const [searchParams] = useSearchParams(); // query params

  const status = searchParams.get("status");
  const page = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    fetch(
      `http://localhost:8080/api/users/${id}/orders?status=${status}&page=${page}&pageSize=${pageSize}`
    )
      .then(res => res.json())
      .then(data => setOrders(data))
      .finally(() => setLoading(false));

  }, [id, status, page, pageSize]);

  return (
    <div>
      <h2>User ID: {id}</h2>
      <h3>Status: {status}</h3>

      {loading && <p>Loading...</p>}

      {orders.map(order => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Amount: {order.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;

```

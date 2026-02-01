⏺️ ➡️ 🟦 🔵 🟢 🔴 ⭕ 🟠 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# ⏺️

### ➡️ Call Backend API using Path Variable

```java
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails() {
  const { id } = useParams(); // path variable
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserDetails;


```

### ➡️ Call Backend API using Request Params

```java
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function UserList() {
  const [searchParams] = useSearchParams();

  const role = searchParams.get("role");
  const page = searchParams.get("page");

  useEffect(() => {
    fetch(`http://localhost:8080/users?role=${role}&page=${page}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [role, page]);

  return <h2>Users</h2>;
}

```

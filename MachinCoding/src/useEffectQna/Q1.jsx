 // Q1.js
import { useEffect, useState } from "react";
import { fakeFetch } from "./Api"; // adjust path as needed

function Q1() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fakeFetch("https://example.com/api/users/status");
        setUsers(response.data.users);
        setLoading(false)
       } catch (err) {
        setError(err.message);
        console.error("Error fetching users:", err);
                setLoading(false)

      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Status</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {
        loading && <p>loading...</p>
      }
       <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> — {user.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Q1;

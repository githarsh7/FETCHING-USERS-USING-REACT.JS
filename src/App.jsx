import { useEffect, useState } from "react";
import Card from "./components/card/card.jsx";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">User Cards</h1>

      {loading && <h2 className="status">Loading...</h2>}

      {error && <h2 className="status error">{error}</h2>}

      <div className="card-wrapper">
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            btnName={`Btn${user.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
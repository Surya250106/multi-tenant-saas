import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Users() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.tenant?.id) {
      api.get(`/tenants/${user.tenant.id}/users`)
        .then(res => setUsers(res.data.data.users || []));
    }
  }, [user]);

  if (user?.role !== "tenant_admin") {
    return <p>Access denied</p>;
  }

  return (
    <>
      <Navbar />
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.email} - {u.role}</li>
        ))}
      </ul>
    </>
  );
}

import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    tenantSubdomain: ""
  });
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <input placeholder="Tenant Subdomain" onChange={e => setForm({ ...form, tenantSubdomain: e.target.value })} />
      <button onClick={submit}>Login</button>
    </div>
  );
}

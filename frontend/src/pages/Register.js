import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState(false);

  const submit = async () => {
    await api.post("/auth/register-tenant", form);
    setSuccess(true);
  };

  return (
    <div>
      <h2>Register Tenant</h2>
      {success && <p>Tenant registered successfully. Please login.</p>}
      <input placeholder="Tenant Name" onChange={e => setForm({ ...form, tenantName: e.target.value })} />
      <input placeholder="Subdomain" onChange={e => setForm({ ...form, subdomain: e.target.value })} />
      <input placeholder="Admin Email" onChange={e => setForm({ ...form, adminEmail: e.target.value })} />
      <input placeholder="Admin Name" onChange={e => setForm({ ...form, adminFullName: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, adminPassword: e.target.value })} />
      <button onClick={submit}>Register</button>
    </div>
  );
}

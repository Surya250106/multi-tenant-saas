import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h3>Multi-Tenant SaaS</h3>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc"
  }
};

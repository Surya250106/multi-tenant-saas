import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/users">Users</Link>
    </aside>
  );
}

const styles = {
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    gap: "10px",
    padding: "10px",
    borderRight: "1px solid #ccc"
  }
};

import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data.data.projects || []));
  }, []);

  return (
    <>
      <Navbar />
      <h2>Dashboard</h2>
      <p>Welcome, {user?.fullName}</p>
      <p>Total Projects: {projects.length}</p>
    </>
  );
}

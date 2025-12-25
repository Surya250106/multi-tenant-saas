import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data.data.projects || []));
  }, []);

  return (
    <>
      <Navbar />
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <a href={`/projects/${p.id}`}>{p.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

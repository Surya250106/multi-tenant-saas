import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get(`/projects/${id}/tasks`)
      .then(res => setTasks(res.data.data.tasks || []));
  }, [id]);

  return (
    <>
      <Navbar />
      <h2>Project Tasks</h2>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>{t.title} - {t.status}</li>
        ))}
      </ul>
    </>
  );
}

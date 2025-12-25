import { useState } from "react";

export default function ProjectModal({ onSave }) {
  const [name, setName] = useState("");

  return (
    <div style={styles.modal}>
      <h3>Create Project</h3>
      <input placeholder="Project Name" onChange={e => setName(e.target.value)} />
      <button onClick={() => onSave({ name })}>Save</button>
    </div>
  );
}

const styles = {
  modal: {
    padding: "20px",
    border: "1px solid #ccc"
  }
};

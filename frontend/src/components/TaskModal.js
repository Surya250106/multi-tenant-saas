import { useState } from "react";

export default function TaskModal({ onSave }) {
  const [title, setTitle] = useState("");

  return (
    <div style={styles.modal}>
      <h3>Create Task</h3>
      <input placeholder="Task Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={() => onSave({ title })}>Save</button>
    </div>
  );
}

const styles = {
  modal: {
    padding: "20px",
    border: "1px solid #ccc"
  }
};

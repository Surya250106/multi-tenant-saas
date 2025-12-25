import { useState } from "react";

export default function UserModal({ onSave }) {
  const [email, setEmail] = useState("");

  return (
    <div style={styles.modal}>
      <h3>Add User</h3>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={() => onSave({ email })}>Save</button>
    </div>
  );
}

const styles = {
  modal: {
    padding: "20px",
    border: "1px solid #ccc"
  }
};

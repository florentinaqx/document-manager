import React, { useState } from "react";

interface AddDocumentFormProps {
  onAdd: (title: string) => void;
}

const AddDocumentForm: React.FC<AddDocumentFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter document title"
      />
      <button type="submit">Add Document</button>
    </form>
  );
};

export default AddDocumentForm;

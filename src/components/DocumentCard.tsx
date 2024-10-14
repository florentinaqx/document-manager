import React from "react";

interface DocumentCardProps {
  title: string;
  position: number;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, position }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
    <h3>{title}</h3>
    <p>Position: {position}</p>
  </div>
);

export default DocumentCard;

import React from "react";
import DocumentCard from "./DocumentCard";

interface Document {
  type: string;
  title: string;
  position: number;
}

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {documents.map((doc) => (
      <DocumentCard key={doc.type} title={doc.title} position={doc.position} />
    ))}
  </div>
);

export default DocumentList;

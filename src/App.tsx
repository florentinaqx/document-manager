import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Sample documents
const initialDocuments = [
  { id: "1", title: "Document 1" },
  { id: "2", title: "Document 2" },
  { id: "3", title: "Document 3" },
];

const App = () => {
  const [documents, setDocuments] = useState(initialDocuments);

  // Handle drag end
  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    // If dropped outside of a valid drop zone, do nothing
    if (!destination) return;

    // Reorder the documents
    const updatedDocuments = [...documents];
    const [movedItem] = updatedDocuments.splice(source.index, 1);
    updatedDocuments.splice(destination.index, 0, movedItem);

    setDocuments(updatedDocuments);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="documents">
  {(provided: any) => (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      style={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
        alignItems: "start", // Align items at the top
      }}
    >
      {documents.map((doc, index) => (
        <Draggable key={doc.id} draggableId={doc.id} index={index}>
          {(provided: any) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ...provided.draggableProps.style,
              }}
            >
              <img
                src={`https://cataas.com/cat?${Math.random()}`} // Random cat image
                alt="cat"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                }}
              />
              <div>
                <strong>{doc.title}</strong>
                <p>Position: {index + 1}</p>
              </div>
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  )}
</Droppable>

    </DragDropContext>
  );
};

export default App;

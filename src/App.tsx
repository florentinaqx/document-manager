// // // import React, { useState, useCallback } from "react";
// // // import Card from "./components/Card";
// // // import Overlay from "./components/Overlay";
// // // import { useDrop } from "react-dnd";
// // // import update from "immutability-helper";
// // // import data from "./data.json";

// // // const App: React.FC = () => {
// // //   const [documents, setDocuments] = useState(data);
// // //   const [overlayImage, setOverlayImage] = useState<string | null>(null);

// // //   const moveCard = useCallback(
// // //     (dragIndex: number, hoverIndex: number) => {
// // //       const draggedCard = documents[dragIndex];
// // //       const updatedCards = update(documents, {
// // //         $splice: [
// // //           [dragIndex, 1],
// // //           [hoverIndex, 0, draggedCard],
// // //         ],
// // //       });
// // //       setDocuments(updatedCards);
// // //     },
// // //     [documents]
// // //   );

// // //   const [, drop] = useDrop(() => ({ accept: "CARD" }));

// // //   const handleCardClick = (thumbnail: string) => setOverlayImage(thumbnail);
// // //   const closeOverlay = () => setOverlayImage(null);

// // //   return (
// // //     <>
// // //       <div
// // //         ref={drop}
// // //         style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(3, 1fr)",
// // //           gap: "16px",
// // //         }}
// // //       >
// // //         {documents.map((doc, index) => (
// // //           <Card
// // //             key={doc.position}
// // //             id={doc.position}
// // //             index={index}
// // //             title={doc.title}
// // //             thumbnail={`/assets/${doc.type}.png`}
// // //             moveCard={moveCard}
// // //             onClick={() => handleCardClick(`/assets/${doc.type}.png`)}
// // //           />
// // //         ))}
// // //       </div>
// // //       {overlayImage && (
// // //         <Overlay thumbnail={overlayImage} onClose={closeOverlay} />
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default App;

// // import React, { useEffect, useState } from "react";
// // import { fetchDocuments, addDocument } from "./mockApi";

// // interface Document {
// //   type: string;
// //   title: string;
// //   position: number;
// // }

// // const App: React.FC = () => {
// //   const [documents, setDocuments] = useState<Document[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [lastSaved, setLastSaved] = useState<number | null>(null);

// //   // Fetch documents from the mock API on component mount
// //   useEffect(() => {
// //     fetchDocuments().then((data: any) => {
// //       setDocuments(data);
// //       setLoading(false);
// //     });
// //   }, []);

// //   // Save data every 5 seconds if changes are made
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       addDocument(documents).then(() => {
// //         setLastSaved(Date.now());
// //         console.log("Data saved");
// //       });
// //     }, 5000);

// //     return () => clearInterval(interval); // Cleanup on unmount
// //   }, [documents]);

// //   const handleAddDocument = () => {
// //     const newDocument = {
// //       type: `new-doc-${documents.length + 1}`,
// //       title: `New Document ${documents.length + 1}`,
// //       position: documents.length,
// //     };
// //     setDocuments([...documents, newDocument]);
// //   };

// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <h1>Document List</h1>
// //       <button onClick={handleAddDocument}>Add Document</button>
// //       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
// //         {documents.map((doc) => (
// //           <div
// //             key={doc.type}
// //             style={{
// //               border: "1px solid #ccc",
// //               padding: "10px",
// //               width: "150px",
// //             }}
// //           >
// //             <h3>{doc.title}</h3>
// //             <p>Position: {doc.position}</p>
// //           </div>
// //         ))}
// //       </div>
// //       {lastSaved && (
// //         <p>Last saved: {new Date(lastSaved).toLocaleTimeString()}</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect, useState } from "react";
// import { fetchDocuments, addDocument } from "./mockApi";
// import DocumentList from "./components/DocumentList";
// import AddDocumentForm from "./components/AddDocumentForm";

// interface Document {
//   type: string;
//   title: string;
//   position: number;
// }

// const App: React.FC = () => {
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch documents on component mount
//   useEffect(() => {
//     fetchDocuments().then((data: any) => {
//       setDocuments(data);
//       setLoading(false);
//     });
//   }, []);

//   const handleAddDocument = (title: string) => {
//     const newDocument: Document = {
//       type: `doc-${documents.length + 1}`,
//       title,
//       position: documents.length,
//     };
//     setDocuments([...documents, newDocument]);
//     addDocument(newDocument);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Documents</h1>
//       <AddDocumentForm onAdd={handleAddDocument} />
//       <DocumentList documents={documents} />
//     </div>
//   );
// };

// export default App;

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
            style={{ display: "grid", gap: "10px" }}
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
                      display: "flex row",
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

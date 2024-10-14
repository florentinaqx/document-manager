import React, { useState, useCallback } from "react";
import Card from "./components/Card";
import Overlay from "./components/Overlay";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import data from "./data.json";

const App: React.FC = () => {
  const [documents, setDocuments] = useState(data);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const draggedCard = documents[dragIndex];
      const updatedCards = update(documents, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedCard],
        ],
      });
      setDocuments(updatedCards);
    },
    [documents]
  );

  const [, drop] = useDrop(() => ({ accept: "CARD" }));

  const handleCardClick = (thumbnail: string) => setOverlayImage(thumbnail);
  const closeOverlay = () => setOverlayImage(null);

  return (
    <>
      <div
        ref={drop}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {documents.map((doc, index) => (
          <Card
            key={doc.position}
            id={doc.position}
            index={index}
            title={doc.title}
            thumbnail={`/assets/${doc.type}.png`}
            moveCard={moveCard}
            onClick={() => handleCardClick(`/assets/${doc.type}.png`)}
          />
        ))}
      </div>
      {overlayImage && (
        <Overlay thumbnail={overlayImage} onClose={closeOverlay} />
      )}
    </>
  );
};

export default App;

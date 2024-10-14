import React from "react";
import { useDrag } from "react-dnd";

interface CardProps {
  id: number;
  title: string;
  thumbnail: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, title, thumbnail, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CARD",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        cursor: "move",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <img src={thumbnail} alt={title} style={{ width: "100%" }} />
      hereeeee
      <h3>{title}</h3>
    </div>
  );
};

export default Card;

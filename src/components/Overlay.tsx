import React from "react";

interface OverlayProps {
  thumbnail: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ thumbnail, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <img
        src={thumbnail}
        alt="Document"
        style={{ maxWidth: "90%", maxHeight: "90%" }}
      />
    </div>
  );
};

export default Overlay;

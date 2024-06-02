import { useState } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export default function Base() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal(event: React.MouseEvent) {
    console.log(event)
    setIsOpen(true);
  }
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={openModal}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          This is out fancy modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
}

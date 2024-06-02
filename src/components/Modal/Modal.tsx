import ReactDOM from 'react-dom';
import React from 'react'
const MODAL_STYLES: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STAYLES: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000
}

interface ModalProps {
  children: React.ReactNode,
  open: boolean,
  onClose: ()=>void
}

function Modal({ children, open, onClose }:ModalProps) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STAYLES}></div>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
}

export default Modal;

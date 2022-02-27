import React from "react";
import ReactModal from "react-modal";

import Button from "./button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<Props> = ({ children, className }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={`modal ${className}`}>
      <Button onClick={openModal} style="primary">
        Open Modal
      </Button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;

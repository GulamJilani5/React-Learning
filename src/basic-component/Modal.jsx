import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setShowModal(true);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setIsModalOpen(false);
  };
return (
    <>
      {showModal ? (
        <div
          className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}
        >
          <div className="modal-container">
            <h3>Modal Heading</h3>
            <p> I am creating it for learning purpose</p>
            <button className="close-modal-button" onClick={closeModal}>
              {/* <FaTimes /> */}
              close
            </button>
          </div>
        </div>
      ) : (
        <button onClick={openModal}>show modal</button>
      )}
    </>
  );
}

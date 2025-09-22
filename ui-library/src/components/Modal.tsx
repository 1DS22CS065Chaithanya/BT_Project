import React from "react";
// import "./Modal.css";
import type {} from "./Modal.css";
import Button from "./Button"; 

type ModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export default function Modal({ isOpen, title, message, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white rounded-lg shadow-lg w-[360px] max-w-[90%] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title text-lg font-semibold mb-3">{title}</h2>
        <p className="modal-message text-gray-700 mb-5">{message}</p>

        <div className="modal-footer flex justify-end">
         <Button label="OK" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

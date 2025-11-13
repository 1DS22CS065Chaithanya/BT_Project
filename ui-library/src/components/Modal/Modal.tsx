
import React from "react";
import Button from "../Button/Button";

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
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] w-[360px] max-w-[90%] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[18px] font-semibold mb-3">{title}</h2>
        <p className="text-[14px] text-textSecondary mb-5">{message}</p>

        <div className="flex justify-end">
          <Button label="OK" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

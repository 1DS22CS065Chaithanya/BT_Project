type ModalProps = {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
};
export default function Modal({ isOpen, title, message, onClose }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};

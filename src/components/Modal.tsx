import { useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
// import Input from "./Input";
// import Button from "./Button";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const modal = useRef<HTMLDialogElement>(null);

  const open = () => {
    if (modal.current) {
      modal.current?.showModal();
    }
  };

  const close = () => {
    modal.current?.close();
  };

  return createPortal(
    <>
      <dialog className="modal" ref={modal}>
        {/* <Input type="text" id="Name" label="Your name" />
        <Input type="text" id="Email" label="Your email" />
        <Button textOnly={true}>Cancel</Button>
        <Button textOnly={false}>Book Session</Button> */}
        {children}
      </dialog>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;

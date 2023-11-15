import { forwardRef, useRef, ReactNode, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const modal = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (modal.current) {
          modal.current?.showModal();
        }
      },
    };
  });

  return createPortal(
    <>
      <dialog className="modal" ref={modal} onClose={onClose}>
        {children}
      </dialog>
    </>,
    document.getElementById("modal-root")!
  );
});

export default Modal;

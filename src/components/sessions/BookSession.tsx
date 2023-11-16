import { FormEvent, useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { useSessionsContext } from "../../hooks/useSessionsContext";
import { Session } from "../../types/session";

type BookSessionProps = {
  session: Session;
  onClose: () => void;
};

const BookSession = ({ session, onClose }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionCtx = useSessionsContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    sessionCtx.bookSession(session);
    onClose();
  };

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Book a Session</h2>
      <form onSubmit={handleSubmit}>
        <Input id="name" label="Your name" type="text" />
        <Input id="email" label="Your email" type="email" />
        <p className="actions">
          <Button textOnly={true}> Cancel </Button>
          <Button textOnly={false}> Book Session </Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;

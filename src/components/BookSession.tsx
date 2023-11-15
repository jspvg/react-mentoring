import { FormEvent, useEffect, useRef } from "react";
import Modal, { ModalHandle } from "./Modal";
import Input from "./Input";
import Button from "./Button";

type BookSessionProps = {
  onClose: () => void;
};

const BookSession = ({ onClose }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);

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
    //need to book session
    onClose();
  }

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

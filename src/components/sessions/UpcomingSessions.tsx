import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Modal";
import { useSessionsContext } from "../../hooks/useSessionsContext";
import UpcomingSession from "./UpcomingSession";
import Button from "../Button";

type UpcomingSessionsProps = {
  onClose: () => void;
};

const UpcomingSessions = ({ onClose }: UpcomingSessionsProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleCancelSession = (sessionId: string) => {
    sessionsCtx.cancelSession(sessionId);
  };

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                title={session.title}
                summary={session.summary}
                date={session.date}
                handleCancelSession={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <div className="actions">
        <Button textOnly={false} onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default UpcomingSessions;

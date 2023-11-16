import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Modal";
import { useSessionsContext } from "../../hooks/useSessionsContext";

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
    <Modal onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
            {sessionsCtx.upcomingSessions.map((session) => (
                <li key={session.id}>
                    {/* add separate session */}
                </li>
            ))}
        </ul>
      )}
    </Modal>
  );
};

export default UpcomingSessions;

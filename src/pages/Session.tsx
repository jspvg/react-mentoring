import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/Button.tsx";
import { useState } from "react";
import BookSession from "../components/sessions/BookSession.tsx";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [booking, setBooking] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  const handleOpen = () => {
    setBooking(true);
  };

  const handleClose = () => {
    setBooking(false);
  };

  return (
    <main id="session-page">
      {booking && <BookSession session={loadedSession} onClose={handleClose} />}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button textOnly={false} onClick={handleOpen}>
                Book Session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}

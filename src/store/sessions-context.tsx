import { ReactNode, useReducer } from "react";
import {
  BookSessionAction,
  CancelSessionAction,
  Session,
  SessionState,
} from "../types/session";
import { SessionsContext } from "../hooks/useSessionsContext";

type SessionAction = BookSessionAction | CancelSessionAction;

const sessionsReducer = (state: SessionState, action: SessionAction) => {
  if (action.type === "book_session") {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      upcomingSessions: state.upcomingSessions.concat(action.session),
    };
  }

  if (action.type === "cancel_session") {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }

  return state;
};

const SessionsContextProvider = ({ children }: { children: ReactNode }) => {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, {
    upcomingSessions: [],
  });

  const bookSession = (session: Session) => {
    dispatch({ type: "book_session", session });
  };

  const cancelSession = (sessionId: string) => {
    dispatch({ type: "cancel_session", sessionId });
  };

  const ctxValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
};

export default SessionsContextProvider;

import { createContext, useContext } from "react";
import { SessionContextValue } from "../types/session";

export const SessionsContext = createContext<SessionContextValue | null>(null);

export const useSessionsContext = () => {
  const context = useContext(SessionsContext);
  if (!context) {
    throw new Error(
      "useSessionsContext must be used within a SessionsContextProvider"
    );
  }
  return context;
};

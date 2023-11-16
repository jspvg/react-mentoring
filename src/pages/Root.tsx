import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SessionsContextProvider from "../store/sessions-context";

export default function Root() {
  return (
    <SessionsContextProvider>
      <Navbar />
      <Outlet />
    </SessionsContextProvider>
  );
}

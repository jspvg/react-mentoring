import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  textOnly: boolean;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const btnTextonly = props.textOnly ? "button--text-only" : "";

  if (props.to) {
    return (
      <Link to={props.to} className={`button ${btnTextonly}`}>
        {props.children}
      </Link>
    );
  }

  return <button className={`button ${btnTextonly}`}>{props.children}</button>;
};

export default Button;

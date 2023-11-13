import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type CommonProps = {
  textOnly: boolean;
  children: ReactNode;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & CommonProps & {
  to?: never;
}

type LinkProps = ComponentPropsWithoutRef<typeof Link> & CommonProps & {
  to: string;
}

const Button = ({ to, textOnly, children, ...otherProps }: ButtonProps | LinkProps) => {
  if (to) {
    return (
      <Link to={to} className={`button ${textOnly ? "button--text-only" : ""}`}>
        {children}
      </Link>
    );
  } 

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps as ButtonProps}
    >
      {children}
    </button>
  );
};

export default Button;

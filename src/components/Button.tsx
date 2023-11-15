import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type CommonProps = {
  textOnly: boolean;
  children: ReactNode;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  CommonProps & {
    to?: never;
  };

type LinkProps = ComponentPropsWithoutRef<typeof Link> &
  CommonProps & {
    to: string;
  };

function isRouterLink(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}

const Button = (props: ButtonProps | LinkProps) => {
  if (isRouterLink(props)) {
    const { textOnly, children, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { textOnly, children, ...otherProps } = props;
  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

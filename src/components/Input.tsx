import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ id, label, ...otherProps }: InputProps) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...otherProps} />
    </div>
  );
};

export default Input;

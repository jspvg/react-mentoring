import { forwardRef, ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...otherProps }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...otherProps} ref={ref} />
      </div>
    );
  }
);

export default Input;

import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  ref: string;
}
import "./styled.scss";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...props },
  ref
) => {
  return (
    <label>
      {label}
      <input {...props} name={name} ref={ref} />
    </label>
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;

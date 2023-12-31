import React from "react";
import Input from "./Input";

const LabelInput = ({
  label,
  type,
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 p-2">
      <div className="text-xs w-44">{label}</div>
      <Input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default LabelInput;

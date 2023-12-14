import React from "react";

const Input = ({ placeholder, type, disabled, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
        className="bg-transparent border-2 border-black rounded-md placeholder:p-1 p-1"
      />
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-2 border-black rounded-md placeholder:p-1 p-1"
      />
    </div>
  );
};

export default Input;

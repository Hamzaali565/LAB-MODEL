import React from "react";
import Input from "./Input";

const LabelInput = () => {
  return (
    <div className="flex items-center space-x-2">
      <div>Test Name:</div>
      <Input placeholder={"Input Test Name"} />
    </div>
  );
};

export default LabelInput;

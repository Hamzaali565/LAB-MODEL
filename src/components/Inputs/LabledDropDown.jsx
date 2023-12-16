import React from "react";
import Input from "./Input";
import Select from "react-select";

const LabledDropDown = ({ label, options, onChange, value }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent", // Set the background color of the control (main input)
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#3182ce" : "transparent", // Set the background color of each option
      color: state.isSelected ? "white" : "black", // Set the text color of each option
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white", // Set the text color of the selected value
    }),
  };
  return (
    <div className="flex items-center justify-center space-x-2 p-2">
      <div className="text-xs w-44">{label}</div>
      <Select
        className="w-52 border-2 border-black"
        options={options}
        styles={customStyles}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default LabledDropDown;

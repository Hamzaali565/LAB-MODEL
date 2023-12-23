import React, { useState } from "react";
import Button from "../../../components/Buttons/Button";
import LabledDropDown from "../../../components/Inputs/LabledDropDown";
import LabelInput from "../../../components/Inputs/LabelInput";
import Pagination from "../../../components/Pagination/Pagination";
import Pagination2 from "../../../components/Pagination/Pagination";

const Group = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [status, setStatus] = useState(null);

  const optionsTatus = [
    { value: "Active ", label: "Active " },
    { value: "DeActive", label: "DeActive" },
  ];
  const options = [
    { value: "Biochemistry", label: "Biochemistry" },
    { value: "Haematology", label: "Haematology" },
    { value: "Serology", label: "Serology" },
    { value: "Cytology", label: "Cytology" },
    { value: "Microbiology", label: "Microbiology" },
    { value: "Parasitology", label: "Parasitology" },
    { value: "Clinical Pathology", label: "Clinical Pathology" },
  ];

  const handleChange = (newSelectedOption) => {
    setSelectedOption(newSelectedOption);
    console.log("Selected Option", selectedOption);
  };
  const handleReset = () => {
    setSelectedOption(null);
    setStatus(null);
    // Reset the selected value
    console.log("Selected Option Reset", selectedOption);
  };

  return (
    <div className="">
      {/* Group Information */}
      <div className="border-2 lg:flex flex-wrap ">
        <LabelInput
          label="Group Code"
          placeholder={"Group Code"}
          type={"text"}
          disabled
          //  onChange={onChange}
          //  value={value}
        />
        <LabelInput
          label="Group Name"
          placeholder={"Group Name"}
          type={"text"}
          //  onChange={onChange}
          //  value={value}
        />
        <LabledDropDown
          options={options}
          selectedOption={selectedOption}
          value={selectedOption}
          onChange={handleChange}
          label="Department"
        />

        <LabelInput
          label="Repor Days"
          placeholder={"Report Days"}
          type={"text"}

          //  onChange={onChange}
          //  value={value}
        />
        <LabledDropDown
          options={optionsTatus}
          selectedOption={status}
          value={status}
          onChange={(e) => {
            setStatus(e);
          }}
          label="Status"
        />
      </div>
      <Button title="Reset" onClick={handleReset} />
      <Pagination2 department={selectedOption ? selectedOption.value : ""} />
    </div>
  );
};

export default Group;

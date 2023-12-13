import React from "react";
import LabelInput from "../../components/Inputs/LabelInput";
import LabledDropDown from "../../components/Inputs/LabledDropDown";

const Test = () => {
  const options = [
    { value: "Biochemistry", label: "Biochemistry" },
    { value: "Haematology", label: "Haematology" },
    { value: "Serology", label: "Serology" },
    { value: "Cytology", label: "Cytology" },
    { value: "Microbiology", label: "Microbiology" },
    { value: "Parasitology", label: "Parasitology" },
    { value: "Clinical Pathology", label: "Clinical Pathology" },
  ];
  const optionsCategory = [
    { value: "Heading", label: "Heading" },
    { value: "Parameter", label: "Parameter" },
    { value: "Test", label: "Test" },
  ];
  const optionsType = [
    { value: "Routine", label: "Routine" },
    { value: "Special", label: "Special" },
    { value: "Out Source", label: "Out Source" },
  ];

  return (
    <div className="w-auto">
      <div className="border-black border-2 mx-2">
        <h1 className="flex justify-center mt-2 underline font-bold">
          Test Information
        </h1>
        <div className="sm:flex flex-wrap">
          <LabelInput
            label={"Test Code"}
            disabled
            placeholder={"Test code"}
            value={"T-001"}
          />
          <LabelInput label={"Test Name"} placeholder={"Type Test Name"} />
          <LabledDropDown options={options} label={"Department"} />
          <LabledDropDown options={optionsCategory} label={"Category"} />
          <LabelInput
            label={"Report Days"}
            type={"number"}
            placeholder={"Type Days"}
          />
          <LabledDropDown options={optionsType} label={"Test Type"} />
        </div>
      </div>
    </div>
  );
};

export default Test;

import React, { useEffect, useState } from "react";
import LabelInput from "../../components/Inputs/LabelInput";
import LabledDropDown from "../../components/Inputs/LabledDropDown";
import TextArea from "../../components/Inputs/TextArea";
import Button from "../../components/Buttons/Button";

const Test = () => {
  const [rangeInfo, setRangeInfo] = useState([
    {
      equipment: "",
      min: "",
      max: "",
      fromAge: "",
      toAge: "",
      unit: "",
      normalRanges: "",
      gender: "",
      ageType: "",
    },
  ]);
  const [previewInfo, setPreview] = useState([
    {
      equipment: "",
      min: "",
      max: "",
      fromAge: "",
      toAge: "",
      unit: "",
      normalRanges: "",
      gender: "",
      ageType: "",
    },
  ]);

  useEffect(() => {
    console.log(rangeInfo);
  }, [rangeInfo]);
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
  const optionsEquip = [{ value: "Equipment", label: "Equipment" }];
  const optionsGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const optionsAgeType = [
    { value: "Day(s)", label: "Day(s)" },
    { value: "Month(s)", label: "Month(s)" },
    { value: "Year(s)", label: "Year(s)" },
  ];
  //   const handleInputChange = (selectedOption, index, field) => {
  //     const updatedItems = [...rangeInfo];
  //     if (updatedItems[index]) {
  //       const newItem = { ...updatedItems[index], [field]: selectedOption.value };
  //       updatedItems[index] = newItem;
  //       setRangeInfo(updatedItems);
  //       console.log(rangeInfo);
  //     }
  //   };
  const handleInputChange = (e, index, field, type) => {
    let value;
    if (type === "select") {
      // Handle the case when the input is a dropdown/select
      value = e.value;
    } else {
      // Handle other cases (text input, number input, etc.)
      value = e.target.value;
    }

    setRangeInfo((prevRangeInfo) => {
      const updatedItems = [...prevRangeInfo];
      if (updatedItems[index]) {
        const newItem = { ...updatedItems[index], [field]: value };
        updatedItems[index] = newItem;
      }
      console.log(updatedItems);
      //   setPreview(rangeInfo);
      return updatedItems;
    });
  };

  const prev = () => {
    setPreview([...previewInfo, rangeInfo]);
    console.log("previewInfo", previewInfo);
    setRangeInfo([
      {
        equipment: "",
        min: "",
        max: "",
        fromAge: "",
        toAge: "",
        unit: "",
        normalRanges: "",
        gender: "",
        ageType: "",
      },
    ]);
  };

  return (
    <div className="w-auto">
      {/* test Information */}
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
      {/* Test Range Information */}
      <div className="border-black border-2 mx-2 mt-4">
        <h1 className="flex justify-center mt-2 underline font-bold">
          Test Ranges Information
        </h1>
        <div className="sm:flex flex-wrap">
          {rangeInfo.map((_, index) => (
            <React.Fragment key={index}>
              <LabledDropDown
                options={optionsEquip}
                label={"Equipment"}
                onChange={(selectedOption) =>
                  handleInputChange(
                    selectedOption,
                    index,
                    "equipment",
                    "select"
                  )
                }
              />
              <LabledDropDown
                options={optionsGender}
                label={"Gender"}
                onChange={(selectedOption) =>
                  handleInputChange(selectedOption, index, "gender", "select")
                }
              />
              <LabelInput
                label={"From Age"}
                type={"number"}
                value={rangeInfo[index].fromAge}
                placeholder={"From Age"}
                onChange={(e) => handleInputChange(e, index, "fromAge")}
              />
              <LabelInput
                label={"To Age"}
                type={"number"}
                placeholder={"To Age"}
                onChange={(e) => handleInputChange(e, index, "toAge")}
              />
              <LabledDropDown
                options={optionsAgeType}
                label={"Age Type"}
                onChange={(selectedOption) =>
                  handleInputChange(selectedOption, index, "ageType", "select")
                }
              />
              <LabelInput
                label={"Min"}
                type={"number"}
                placeholder={"Min"}
                onChange={(e) => handleInputChange(e, index, "min")}
              />
              <LabelInput
                label={"Max"}
                type={"number"}
                placeholder={"Max"}
                onChange={(e) => handleInputChange(e, index, "max")}
              />
              <LabelInput
                label={"Unit"}
                type={"text"}
                placeholder={"Unit"}
                onChange={(e) => handleInputChange(e, index, "unit")}
              />
              <TextArea
                placeholder="Normal Ranges"
                label="normal Ranges"
                onChange={(e) => handleInputChange(e, index, "normalRanges")}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center">
          <Button onClick={prev} title={"Add"} />
        </div>
      </div>
    </div>
  );
};

export default Test;

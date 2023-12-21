import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useSelector } from "react-redux";

// let data = [
//   { name: "hamza" },
//   { name: "khan" },
//   { name: "hamas" },
//   { name: "kaza" },
//   { name: "maksalmza" },
//   { name: "das;dk;a" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "dk;alsdk" },
//   { name: "kjmcas" },
//   { name: "111" },
//   { name: "132321" },
//   { name: "03141546532" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
//   { name: "hamza" },
// ];

const PaginationComponent = ({ department }) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const url = useSelector((stete) => stete.url);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${url}/gettest?department=Biochemistry`
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.log("department", url);
      console.log(error);
    }
  };

  if (department) getData();
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = Math.min((pageNumber + 1) * itemsPerPage, data.length);
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePageChange = (event, newPageNumber) => {
    setPageNumber(newPageNumber - 1); // Adjusting for zero-based index
  };

  return (
    <div className="border-2 flex flex-col">
      {/* Render your data here */}
      {currentPageData.map((item, index) => (
        <div key={index}>{item._id}</div>
      ))}

      <Stack spacing={2} className="flex self-center">
        <Pagination
          count={totalPages}
          page={pageNumber + 1}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;

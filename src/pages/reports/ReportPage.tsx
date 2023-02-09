import React, { useContext } from "react";
import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import HeaderContext from "../../context/HeaderContext";
const header = ["Daily", "Monthly"];
const options = header.map((option) => ({ label: option, value: option }));
const ReportPage = () => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  return (
    <div>
      <div className="flex mb-4">
        <Filter />
      </div>
      <div className="flex justify-start mb-4">
        <Header
          bgcolor="#bac6d6"
          header={options}
          headervalue={headervalue}
          setHeaderValue={setHeaderValue}
        />
      </div>
      <List />
    </div>
  );
};

export default ReportPage;

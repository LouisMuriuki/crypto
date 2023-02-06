import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import TableList from "../../components/Table/TableList";
import HeaderContext from "../../context/HeaderContext";
const header = ["Upcoming", "Rescheduled", "Cancelled"];
const options = header.map(option => ({ label: option, value: option }));
const Meetings = () => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  return (
    <div>
      <Header
        header={options}
        headervalue={headervalue}
        setHeaderValue={setHeaderValue}
      />
      <TableList />
    </div>
  );
};

export default Meetings;

import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import HeaderContext from "../../context/HeaderContext";
const header = [
  {
    title: "Upcoming",
  },
  {
    title: "Rescheduled",
  },
  {
    title: "Cancelled",
  },
];
const Meetings = () => {
  const {clickedindex,setClickedIndex}=useContext(HeaderContext)
  return (
    <div>
      Meetings
      <Header header={header} clickedindex={clickedindex} setClickedIndex={setClickedIndex}/>
      <List />
    </div>
  );
};

export default Meetings;

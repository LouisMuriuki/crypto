import { createContext, useState } from "react";
import moment from "moment";
export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const datefrom = new Date().setHours(0, 0, 0, 0);
  const dateto = new Date().setHours(23, 59, 59, 999);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [filterclicked, setFilterClicked] = useState(false);
  const [monthyear, setMonthYear] = useState();
  console.log(from?.$d);

  return (
    <FilterContext.Provider
      value={{
        from,
        setFrom,
        to,
        setTo,
        filterclicked,
        setFilterClicked,
        monthyear,
        setMonthYear,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

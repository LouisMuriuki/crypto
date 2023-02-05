import { createContext, useState } from "react";

const HeaderContext = createContext();
export const HeaderContextProvider = ({ children }) => {
  const [clickedindex, setClickedIndex] = useState(0);

  return (
    <HeaderContext.Provider value={{ clickedindex, setClickedIndex }}>
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;

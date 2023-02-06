import { createContext, useState } from "react";

const HeaderContext = createContext();
export const HeaderContextProvider = ({ children }) => {
  const [headervalue, setHeaderValue] = useState("");

  return (
    <HeaderContext.Provider value={{ headervalue, setHeaderValue }}>
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;

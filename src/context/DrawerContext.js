import { createContext, useState } from "react";

const DrawerContext = createContext();
export const DrawerContextProvider = ({ children }) => {
  const [notificationsopen, setNotificationsOpen] = useState(false);
  const [newmeetingopen, setNewMeetingOpen] = useState(false);
  const [asyncconfirmopen, setAsyncConfirmOpen] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        notificationsopen,
        setNotificationsOpen,
        newmeetingopen,
        setNewMeetingOpen,
        asyncconfirmopen,
        setAsyncConfirmOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
export default DrawerContext;

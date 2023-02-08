import { createContext, useState } from "react";

const DrawerContext = createContext();
export const DrawerContextProvider = ({ children }) => {
  const [notificationsopen, setNotificationsOpen] = useState(false);
  const [newmeetingopen, setNewMeetingOpen] = useState(false);
  const [asyncconfirmopen, setAsyncConfirmOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [newstaffmodalopen, setNewStaffModalOpen] = useState(false);
  const [confirmStaffFormLoading, setConfirmStaffFormLoading] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        notificationsopen,
        setNotificationsOpen,
        newmeetingopen,
        setNewMeetingOpen,
        asyncconfirmopen,
        setAsyncConfirmOpen,
        profileModalOpen,
        setProfileModalOpen,
        newstaffmodalopen,
        setNewStaffModalOpen,
        confirmStaffFormLoading,
        setConfirmStaffFormLoading,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
export default DrawerContext;

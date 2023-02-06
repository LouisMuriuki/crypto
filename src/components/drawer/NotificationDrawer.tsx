import React, { useContext, useState } from 'react';
import { Button, Drawer } from 'antd';
import DrawerContext from '../../context/DrawerContext';

const NotificationDrawer: React.FC = () => {
  const {notificationsopen, setNotificationsOpen}=useContext(DrawerContext)

  const onClose = () => {
    setNotificationsOpen(false);
  };

  return (
    <>
      <Drawer title="System Notifications" placement="right" onClose={onClose} open={notificationsopen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default NotificationDrawer;
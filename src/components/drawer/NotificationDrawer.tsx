import React, { useContext, useState } from "react";
import { Button, Drawer } from "antd";
import DrawerContext from "../../context/DrawerContext";
import {GrFormClose} from 'react-icons/gr'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Notifications = [
  "Bitcoin price just hit a new all-time high!",
  "Ethereum network experiencing high congestion. Expect slower transaction times.",
  "New decentralized finance (DeFi) protocol just launched. Check it out!",
  "Binance announces support for new altcoin.",
  "Crypto market experiencing volatility. Exercise caution.",
  "Major crypto exchange hacked. Withdraw your funds immediately.",
  "Experts predict a bull run for altcoins in the coming weeks.",
  "Bitcoin mining difficulty set to increase in the next adjustment period.",
  "New stablecoin backed by USD just launched. Purchase available on our platform.",
  "Important security update: Please enable two-factor authentication on your account.",
];

const NotificationDrawer: React.FC = () => {
  const { notificationsopen, setNotificationsOpen } = useContext(DrawerContext);
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const onClose = () => {
    setNotificationsOpen(false);
  };

  return (
    <>
      <Drawer
        title="System Notifications"
        placement="right"
        onClose={onClose}
        open={notificationsopen}
        width={isMobile?310:378}
      >
        {Notifications.map((notification, i) => {
          return (
            <div key={i} className="relative bg-[#141414] p-1 rounded-md w-full m-1">
              <p className="text-white p-2 font-mono">{notification}</p>
              <GrFormClose size={20} color={"red"} className="absolute top-1 right-1 cursor-pointer"/>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default NotificationDrawer;

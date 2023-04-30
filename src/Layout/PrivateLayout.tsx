import React, { useContext, useEffect, useState } from "react";
import {
  PieChartOutlined,
  TeamOutlined,
  PoweroffOutlined,
  UserOutlined,
  BellOutlined,
  ScheduleOutlined,
  PlusOutlined,
  DeliveredProcedureOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { BsBriefcaseFill } from "react-icons/bs";
import { Avatar, Badge, Button, Space, Typography } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";
import DrawerContext from "../context/DrawerContext";
import NotificationDrawer from "../components/drawer/NotificationDrawer";
import NewMeetingsForm from "../components/drawer/NewMeetingsDrawer";
import ProfilePopup from "../components/drawer/ProfilePopup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Pill from "../components/pill/Pill";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
const { Header, Content, Sider } = Layout;
// const { Title } = Typography;

// const Menuitems: MenuProps["items"] = [
//   {
//     key: "1",
//     label: <Pill image="" text="wq23456yqhvgq" size="small" variant="filled" />,
//   },
//   {
//     key: "2",
//     label: <Pill image="" text="wq23456yqhvgq" size="small" variant="filled" />,
//   },
//   {
//     key: "3",
//     label: <Pill image="" text="wq23456yqhvgq" size="small" variant="filled" />,
//   },
// ];

interface MenuItem {
  title: string;
  key: string;
  icon?: React.ReactNode;
  to?: string;
  children?: MenuItem[];
}

const { SubMenu } = Menu;

function getItem(
  title: string,
  key: string,
  icon?: React.ReactNode,
  to?: string,
  children?: MenuItem[]
) {
  return { title, key, to, icon, children };
}

const items: MenuItem[] = [
  getItem(
    "DashBoard",
    "1",
    <PieChartOutlined style={{ fontSize: "16px" }} />,
    "/dashboard"
  )
];

const PrivateLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [time, setTime] = useState(new Date());

  const {
    setNotificationsOpen,
    setNewMeetingOpen,
    profileModalOpen,
    setProfileModalOpen,
  } = useContext(DrawerContext);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const handleMenuClick = () => {
    isMobile && setCollapsed(true);
  };

  const location = useLocation();
  let currentLink: string = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb">
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  useEffect(() => {
    let intervalId: any;
    const updateTime = () => setTime(new Date());

    intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible={false}
        collapsed={collapsed}
        breakpoint="lg"
        defaultCollapsed={isMobile ? true : false}
        zeroWidthTriggerStyle={{ position: "absolute", top: 0, marginTop: 12,background:"#141414" }}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "visible",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
          background: "#141414",
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
          }}
        >
          <span
            className=" flex text-2xl font-bold text-[#FF8042] items-center justify-center"
          >
            $COINSIFY
          </span>
          {/* <Dropdown  menu={{ items }} placement="bottomLeft" arrow>
          <Pill color="white" image="" text="wqtrwtyqhvgq" size="small" variant="filled"/>
    </Dropdown> */}
        </div>
        <Menu
          theme="dark"
          inlineCollapsed={collapsed}
          onSelect={() => {}}
          // defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ paddingTop: 10, background: "#141414" }}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu
                  key={item.key}
                  onTitleClick={() => {}}
                  title={
                    <span>
                      {item.icon}
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.key} onClick={handleMenuClick}>
                      {child.icon}
                      {child.to ? (
                        <Link to={child.to}>{child.title}</Link>
                      ) : (
                        child.title
                      )}
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.key} onClick={handleMenuClick}>
                  {item.icon}
                  {item.to ? (
                    <Link to={item.to}>{item.title}</Link>
                  ) : (
                    item.title
                  )}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: isMobile ? 0 : collapsed ? 0 : 200 }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-center",
            }}
          >
            <p className="pl-12 text-base font-mono  ">
              Hello Monica,
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="flex flex-col md:flex-row  items-center font-mono leading-none">
              <span className="text-xs md:text-base">
                {time?.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="px-2">
                <Badge dot color="black" size="small" />
              </span>
              <span className="time">
                {time?.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ paddingRight: 20 }} className="flex items-center">
              <Space size="large">
                {isMobile ? null : (
                  <>
                    <Button
                      onClick={() => setNewMeetingOpen(true)}
                      className="flex items-center font-mono justify-center"
                      icon={<PlusOutlined />}
                    >
                      New Wallet
                    </Button>
                    <div onClick={() => setNotificationsOpen(true)}>
                      <Badge dot>
                        <BellOutlined
                          style={{ fontSize: "20px", cursor: "pointer" }}
                        />
                      </Badge>
                    </div>
                  </>
                )}

                <div className="cursor-pointer">
                  <Avatar
                    size={40}
                    onClick={() => setProfileModalOpen(true)}
                    src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
                  />
                </div>
              </Space>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: isMobile ? "0 5px" : "0 16px",
            zIndex: collapsed ? 1000 : 0,
          }}
        >
          <Breadcrumb
            style={{ margin: isMobile ? "3px 17px" : "10px 30px" }}
            className="breadcrumbs"
          >
            <Breadcrumb.Item>{crumbs}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: isMobile ? 10 : 24,
              minHeight: 360,
              backgroundColor: "#000",
            }}
          >
            <Outlet />
            <NotificationDrawer />
            <NewMeetingsForm />
            <ProfilePopup />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;

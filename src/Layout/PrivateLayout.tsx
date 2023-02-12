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
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

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
  ),
  getItem(
    "Staff",
    "sub1",
    <TeamOutlined style={{ fontSize: "16px" }} />,
    "/staff/"
    // [
    //   getItem("Manage", "2", <UsergroupAddOutlined />, "/staff/"),
    //   getItem(
    //     "Reports",
    //     "3",
    //     <DeliveredProcedureOutlined style={{ fontSize: "16px" }} />,
    //     "/staff/reports"
    //   ),
    // ]
  ),
  getItem(
    "Meetings",
    "sub2",
    <BsBriefcaseFill size={16} style={{ marginRight: 10 }} />,
    undefined,
    [
      getItem(
        "View",
        "6",
        <BsBriefcaseFill size={16} style={{ marginRight: 10 }} />,
        "/meetings/"
      ),
      getItem(
        "Reports",
        "7",
        <DeliveredProcedureOutlined style={{ fontSize: "16px" }} />,
        "/meetings/reports"
      ),
    ]
  ),
  getItem(
    "Account",
    "8",
    <UserOutlined style={{ fontSize: "16px" }} />,
    "/account"
  ),
  getItem("Logout", "9", <PoweroffOutlined style={{ fontSize: "16px" }} />),
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
    let intervalId :any
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
        zeroWidthTriggerStyle={{ position: "absolute", top: 0, marginTop: 12 }}
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
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
          }}
        >
          <Title level={4} style={{ color: "#FFF" }}>
            MGENI KARIBU
          </Title>
        </div>
        <Menu
          theme="dark"
          // defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ paddingTop: 10 }}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu
                  key={item.key}
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
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span className="text-base md:text-xl font-bold leading-none text-[#00308f]">
              BizPlus Limited
            </span>
            <div className="flex flex-row items-center leading-none">
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
                      className="flex items-center justify-center"
                      icon={<PlusOutlined />}
                    >
                      New Meeting
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
        <Content style={{ margin: isMobile ? "0 5px" : "0 16px" }}>
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
              backgroundColor: "#f5f5f5",
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

import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, MenuProps, Space, Typography } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import{NavLink,Outlet} from"react-router-dom"
interface Children {
  children: React.ReactNode;
}

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("DashBoard", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "7"),
  ]),
  getItem("Files", "8", <FileOutlined />),
];

const PrivateLayout= () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
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
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
          }}
        >
          <Title level={3} style={{ color: "#FFF" }}>
            MGENI KARIBU
          </Title>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ paddingTop: 10 }}
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? 0 : 200 }}
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
            <Title level={3} style={{ marginLeft: 80 }}>
              GoodAfternoon Monica,
            </Title>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ paddingRight: 20 }}>
              <Space size="large">
                <Button icon={<PlusOutlined />}>New Meeting</Button>
                <Badge dot>
                  <BellOutlined
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  />
                </Badge>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </Space>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
          <Outlet/>
          </div>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;

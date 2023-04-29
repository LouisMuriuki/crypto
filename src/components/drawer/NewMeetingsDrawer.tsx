import React, { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import DrawerContext from "../../context/DrawerContext";
import NewMeetingForm from "../forms/NewMeetingForm";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const { Option } = Select;

const NewMeetingsDrawer: React.FC = () => {
  const { newmeetingopen, setNewMeetingOpen } = useContext(DrawerContext);

  const onClose = () => {
    setNewMeetingOpen(false);
  };

  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Drawer
        title="Add a New Wallet "
        width={isMobile ? 310 : 720}
        onClose={onClose}
        open={newmeetingopen}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          requiredMark
          onFinish={onFinish}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Form.Item
            label="Wallet Name"
            name="walletName"
            rules={[{ required: true, message: "Please enter a wallet name" }]}
          >
            <Input placeholder="Enter Wallet Name" />
          </Form.Item>

          <Form.Item
            label="Cryptocurrency"
            name="cryptocurrency"
            rules={[
              { required: true, message: "Please select a cryptocurrency" },
            ]}
          >
            <Select placeholder="Select Cryptocurrency">
              <Option value="bitcoin">Bitcoin</Option>
              <Option value="ethereum">Ethereum</Option>
              <Option value="dogecoin">Dogecoin</Option>
              <Option value="cardano">Cardano</Option>
              <Option value="litecoin">Litecoin</Option>
              <Option value="chainlink">Chainlink</Option>
              <Option value="binancecoin">Binance Coin</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Public Address"
            name="publicAddress"
            rules={[
              {
                required: true,
                message: "Please enter the public address of your wallet",
              },
            ]}
          >
            <Input placeholder="Enter Public Address" />
          </Form.Item>

          <Form.Item
            label="Private Key"
            name="privateKey"
            rules={[
              {
                required: true,
                message: "Please enter the private key of your wallet",
              },
            ]}
          >
            <Input.Password placeholder="Enter Private Key" />
          </Form.Item>

          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Wallet
            </Button>
          </Form.Item> */}
        </Form>
        {/* <NewMeetingForm/> */}
      </Drawer>
    </>
  );
};

export default NewMeetingsDrawer;

import { Form, Input, Upload, Select, DatePicker, TimePicker, Button } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const NewMeetingForm = () => {
  const onFinish = (values:any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Name" />
      </Form.Item>

      <Form.Item
        label="Company Name"
        name="companyName"
        rules={[
          {
            required: true,
            message: "Please input your company name!",
          },
        ]}
      >
        <Input placeholder="Company Name" />
      </Form.Item>

      <Form.Item
        label="ID/Passport Number"
        name="idNumber"
        rules={[
          {
            required: true,
            message: "Please input your ID/Passport Number!",
          },
        ]}
      >
        <Input placeholder="ID/Passport Number" />
      </Form.Item>

      <Form.Item
        label="Nationality"
        name="nationality"
        rules={[
          {
            required: true,
            message: "Please select your nationality!",
          },
        ]}
      >
        <Select placeholder="Select your Nationality">
          <Option value="India">India</Option>
          <Option value="USA">USA</Option>
          <Option value="UK">UK</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        label="Host"
        name="host"
        rules={[
          {
            required: true,
            message: "Please input the host name!",
          },
        ]}
      >
        <Input placeholder="Host" />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[
          {
            required: true,
            message: "Please upload your image!",
          },
        ]}
      >
        <Upload name="image" action="/upload" listType="picture">
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: "Please select the date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Start Time"
        name="startTime"
        rules={[
          {
            required: true,
            message: "Please select the start time!",
          },
        ]}
      >
        <TimePicker />
      </Form.Item>

      <Form.Item
        label="End Time"
        name="endTime"
        rules={[
          {
            required: true,
            message: "Please select the end time!",
          },
        ]}
      >
        <TimePicker />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewMeetingForm;
import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Upload, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
    md: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function NewStaffForm() {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setImageUrl(info.file.thumbUrl);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      style={{ width: "100%" }}
      onFinish={handleSubmit}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "The input is not a valid email address!",
          },
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="organizationRole" label="Organization Role">
        <Radio.Group>
          <Radio value="member">Member</Radio>
          <Radio value="leader">Leader</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="sex" label="Sex">
        <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="image"
        label="Image"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>

      <Form.Item name="jobInitials" label="Job Initials">
        <Select placeholder="Please select a job">
          <Option value="developer">Developer</Option>
          <Option value="designer">Designer</Option>
          <Option value="project_manager">Project Manager</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default NewStaffForm;

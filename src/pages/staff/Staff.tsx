import { Typography,Button } from "antd";
import React from "react";
import {  PlusOutlined} from "@ant-design/icons";
const Staff = () => {
  const { Title } = Typography;
  return (
    <div>
      <div className="bg-white shadow-md border p-2 flex justify-between items-center">
        <Title level={3} className="flex items-center justify-center" >
          NEW STAFF
        </Title>
        <Button className="flex items-center justify-center" icon={<PlusOutlined />} type="primary">ADD</Button>
      </div>
    </div>
  );
};

export default Staff;

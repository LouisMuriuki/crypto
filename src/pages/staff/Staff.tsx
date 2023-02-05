import { Typography,Button } from "antd";
import React from "react";
import {  PlusOutlined,DeleteOutlined } from "@ant-design/icons";
import List from "../../components/list/List";
import { Link } from "react-router-dom";




const Staff = () => {
  const { Title } = Typography;

  const handleDelete=(param:any)=>{

  }
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params:any) => {
        return (
          <div className="flex flex-row items-center">
            <Link
              to={`${params.row._id}`}
              state={params.row.bp_employee_account_information_is_verified}
              style={{ textDecoration: "none" }}
            >
              <Button  color="primary" size="small">
                Details
              </Button>
            </Link>
            <div>
              <div
                className="ml-2 hover:cursor-pointer"
                onClick={() => [handleDelete(params), console.log(params)]}
              >
                <DeleteOutlined color="red"  />
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="bg-white shadow-md border p-2 mb-4 flex justify-between rounde border-gray-100  items-center">
        <Title level={3} className="flex  items-center justify-center" >
          NEW STAFF
        </Title>
        <Button className="flex items-center justify-center" icon={<PlusOutlined />} type="primary">ADD</Button>
      </div>
      <List actionColumn={actionColumn}/>
    </div>
  );
};

export default Staff;

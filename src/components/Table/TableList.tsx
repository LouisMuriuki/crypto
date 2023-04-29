import React, { useContext, useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import qs from "qs";
import { DeleteOutlined } from "@ant-design/icons";
import AsyncConfirm from "../drawer/AsyncConfirm";
import DrawerContext from "../../context/DrawerContext";
import { useNavigate } from "react-router-dom";
import {Coins} from "../../source"
interface DataType {
  name:string
  balance: number;
  price: string
  value:string
  imageUrl:string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const TableList: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const { asyncconfirmopen, setAsyncConfirmOpen } = useContext(DrawerContext);

  const navigate=useNavigate()

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (_, record) => (
        <Space size="middle" >
          <img className="w-8 h-8 " src={record.imageUrl} />
          <span>{record.name}</span>
        </Space>
      ),
      
    },
    {
      title: "Balances",
      dataIndex: "balance",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Value",
      dataIndex: "value",
     
    },
  ];


  useEffect(() => {
    setData(Coins)
  }, []);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[]
  ) => {
    setTableParams({
      pagination,
      filters: filters as Record<string, FilterValue>, // Cast filters as Record<string, FilterValue>
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      className="w-full overflow-x-auto bg-[#141414]"
      columns={columns}
      rowKey={(record) => record.name}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default TableList;

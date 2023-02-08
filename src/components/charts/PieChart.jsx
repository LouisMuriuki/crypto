import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import { SegmentedLabeledOption } from "antd/es/segmented";
import Header from "../header/Header";
import HeaderContext from "../../context/HeaderContext";

const PieChart = ({ header }) => {
  const { headervalue, setHeaderValue } = useContext(HeaderContext);
  const data = [
    {
      type: "CEO",
      value: 27,
    },
    {
      type: "HR",
      value: 25,
    },
    {
      type: "CFO",
      value: 18,
    },
    {
      type: "ACC",
      value: 15,
    },
    {
      type: "CTO",
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <div className="bg-white shadow-md border p-1 w-full">
      <div className="flex flex-col px-3 ">
        <h1 className="flex text-lg justify-center underline underline-offset-4 ">Staff Engagements</h1>
        <div className="flex justify-end">
          <Header
            header={header}
            setHeaderValue={setHeaderValue}
            headervalue={headervalue}
          />
        </div>
      </div>

      <Pie {...config} />
    </div>
  );
};

export default PieChart;

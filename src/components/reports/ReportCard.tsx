import React from "react";
import { Card } from "antd";

interface Props {
  title: string;
  description: string;
  key:number|string
}

const ReportCard = ({ title, description,key}: Props) => (
  <Card key={key} style={{ width: 300 }} className="flex flex-col p-0.5 h- ">
    <h1 className="py-1 px-0.5 font-bold text-lg underline" >{title}</h1>
    <p className="w-full px-1 text-base">{description}</p>
  </Card>
);

export default ReportCard;

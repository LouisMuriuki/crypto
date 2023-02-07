import React, { CSSProperties } from "react";
import { Card } from "antd";
import { BsFillPeopleFill, BsBriefcaseFill } from "react-icons/bs";
interface Props {
  text: string;
  number: number;
  color: string;
  icon: string;
}

function Widget({ text, number, color, icon }: Props) {
  return (
    <Card
      size="small"
      hoverable
      className="relative flex flex-row"
      style={{ width: 300, height: 100, margin: "0 auto", padding: 0 }}
    >
      <div
        className="absolute  h-full w-[5px]  rounded-l-md"
        style={{ top: 0, left: 0, backgroundColor: color }}
      ></div>
      <div className="flex flex-row w-full">
        <div className=" flex w-[4/5]">
          <div className="flex flex-col justify-around">
            <h3 className="m-0 p-1 text-xl">{text}</h3>
            <h5 className="m-0 p-1 text-base font-normal">{number}</h5>
          </div>
        </div>
        <div className="absolute" style={{ top: 25, right: 20 }}>
          {icon === "BsFillPeopleFill" ? <BsFillPeopleFill size={18} color={color}/> : null}
          {icon === "BsBriefcaseFill" ? <BsBriefcaseFill size={18} color={color}/> : null}
        </div>
      </div>
    </Card>
  );
}

export default Widget;

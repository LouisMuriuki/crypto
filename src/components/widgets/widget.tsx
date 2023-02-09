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
      className="relative mb-5 flex md:flex-row mr-1"
      style={{
        height: 100,
        padding: 0,
      }}
    >
      <div
        className="absolute  h-full w-[5px]  rounded-l-md"
        style={{ top: 0, left: 0, backgroundColor: color }}
      ></div>
      <div className="flex flex-row m w-[125px] md:w-[250px] ">
        <div className="flex flex-col justify-around w-[100%]">
          <div className=" flex w-full items-center justify-around md:justify-between ">
            <h3 className="m-0 p-1 text-sm md:text-xl">{text}</h3>
            <div className="flex justify-end pl-6">
              {icon === "BsFillPeopleFill" ? (
                <BsFillPeopleFill size={18} color={color} />
              ) : null}
              {icon === "BsBriefcaseFill" ? (
                <BsBriefcaseFill size={18} color={color} />
              ) : null}
            </div>
          </div>

          <h5 className="m-0 p-1 text-base font-normal">{number}</h5>
        </div>
      </div>
    </Card>
  );
}

export default Widget;

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
        width: "max-content",
        height: 100,
        // margin: "0 auto",
        padding: 0,
      }}
    >
      <div
        className="absolute  h-full w-[5px]  rounded-l-md"
        style={{ top: 0, left: 0, backgroundColor: color }}
      ></div>
      <div className="flex flex-row w-[120px] md:w-full ">
        <div className="flex flex-col justify-around">
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

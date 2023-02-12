import { Typography, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import RecentMeetings from "../../components/recentmeetings/RecentMeetings";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Widget from "../../components/widgets/widget";

const header = ["Today", "This Month"];
const options = header.map((option) => ({ label: option, value: option }));
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const widgetdata = [
  {
    title: "Monthly Meetings ",
    number: 211,
    icon: "BsBriefcaseFill",
  },
  {
    title: "Monthly Visitors",
    number: 261,
    icon: "BsFillPeopleFill",
  },
  {
    title: "Todays Meetings",
    number: 21,
    icon: "BsBriefcaseFill",
  },
  {
    title: "Todays Vistors",
    number: 21,
    icon: "BsFillPeopleFill",
  },
];

function Home() {
  const { Title } = Typography;
  let time = new Date();
  // const homedata=useLoaderData()
  const [greeting, setGreeting] = useState<string>("");
  let hours = time.getHours();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    hours < 12
      ? setGreeting("GoodMorning")
      : hours <= 18 && hours >= 12
      ? setGreeting("GoodAfternoon")
      : setGreeting("GoodEvening");
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-5 px-2">
        <Title level={isMobile ? 4 : 2}>{greeting} Monica,</Title>
      </div>
      <div></div>
      <div className="flex w-full mb-5 md:items-center p-0 md:p-2 justify-around md:justify-between flex-wrap">
        {widgetdata.map((data, i) => {
          return (
            <Widget
              text={data.title}
              number={data.number}
              color={COLORS[i % COLORS.length]}
              icon={data.icon}
            />
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row p-0 md:p-2">
        <div className=" py-1 md:p-2" style={{ flex: 3 }}>
          <RecentMeetings />
        </div>
        <div className=" py-1 md:p-2" style={{ flex: 2 }}>
          <PieChart header={options} />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row p-0 md:p-2">
        <div className=" py-1 md:p-2" style={{ flex: 2 }}>
          <BarChart />
        </div>
        <div className=" py-1 md:p-2" style={{ flex: 3 }}>
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default Home;

// export const homeLoader=async()=>{
//     const res =await fetch("")
//     return res.json()

// }

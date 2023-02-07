import { Typography } from "antd";
import React from "react";
import { useLoaderData } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import RecentMeetings from "../../components/recentmeetings/RecentMeetings";
import Widget from "../../components/widgets/Widget";

const header = ["Today", "This Month"];
const options = header.map((option) => ({ label: option, value: option }));
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const widgetdata = [
  {
    title: "Monthly Meetings ",
    number: 211,
    icon:"BsBriefcaseFill"
  },
  {
    title: "Monthly Visitors",
    number: 261,
    icon:"BsFillPeopleFill"
  },
  {
    title: "Todays Meetings",
    number: 21,
    icon:"BsBriefcaseFill"
  },
  {
    title: "Todays Vistors",
    number: 21,
    icon:"BsFillPeopleFill"
  },
];

function Home() {
  const { Title } = Typography;
  // const homedata=useLoaderData()
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-5 px-2">
        <Title level={2}>GoodAfternoon Monica,</Title>
      </div>
      <div></div>
      <div className="flex w-full mb-5 items-center justify-start">
        {widgetdata.map((data, i) => {
          return <Widget text={data.title} number={data.number} color={COLORS[i % COLORS.length]} icon={data.icon} />;
        })}
      </div>
      <div className="flex p-2">
        <div className=" p-2" style={{ flex: 3 }}>
          <RecentMeetings />
        </div>
        <div className=" p-2" style={{ flex: 2 }}>
          <PieChart header={options} />
        </div>
      </div>
      <div className="flex p-2">
        <div className=" p-2" style={{ flex: 2 }}>
          <BarChart />
        </div>
        <div className=" p-2" style={{ flex: 3 }}>
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

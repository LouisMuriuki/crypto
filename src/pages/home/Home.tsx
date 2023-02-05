import { Typography } from "antd";
import React from "react";
import { useLoaderData } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import PieChart from "../../components/charts/PieChart";
import RecentMeetings from "../../components/recentmeetings/RecentMeetings";
import Widget from "../../components/widgets/Widget";

function Home() {
  const { Title } = Typography;
  // const homedata=useLoaderData()
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-2">
        <Title level={2}>GoodAfternoon Monica,</Title>
      </div>
      <div>

      </div>
      <div className="flex w-full items-center">
        <Widget text="total meetings this month" />
        <Widget text="total visitors this month" />
        <Widget text="total meetings this month" />
      </div>
      <div className="flex p-2">
        <div className=" p-2" style={{ flex: 3 }}>
          <RecentMeetings />
        </div>
        <div className=" p-2" style={{ flex: 2 }}>
          <PieChart/>
        </div>
      </div>
      <div className="flex p-2">
        <div className=" p-2" style={{ flex: 2 }}>
          <BarChart/>
        </div>
        <div className=" p-2" style={{ flex: 3 }}>
          <LineChart/>
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

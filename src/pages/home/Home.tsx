import { Typography } from "antd";
import React from "react";
import { useLoaderData } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import RecentMeetings from "../../components/recentmeetings/RecentMeetings";

function Home() {
  const { Title } = Typography;
  // const homedata=useLoaderData()
  return (
    <div className="flex flex-col">
      <div className="flex p-2">
      <Title level={2} >
              GoodAfternoon Monica,
            </Title>
      </div>
      <div className="flex p-2">
        <div className=" p-2" style={{ flex: 3 }}>
          <RecentMeetings />
        </div>
        <div className=" p-2" style={{ flex: 2 }}>
          <BarChart />
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

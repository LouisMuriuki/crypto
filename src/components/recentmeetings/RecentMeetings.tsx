import { Typography } from "antd";
import React from "react";

const RecentMeetings = () => {
  const { Title } = Typography;
  return (
    <div className="bg-white shadow-md border p-3">
      <Title className="flex items-center justify-center" level={3}>Todays Meetings</Title>
    </div>
  );
};

export default RecentMeetings;

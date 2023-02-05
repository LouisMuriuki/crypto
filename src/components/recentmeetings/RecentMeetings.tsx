import { Typography } from "antd";
import React from "react";

const meetings = [
  {
    meetingTitle: "Weekly Team Meeting",
    timeRange: "10:00am - 11:00am",
    imageUrls: [
      "https://pixlr.com/images/index/remove-bg.webp",
      "https://pixlr.com/images/index/remove-bg.webp",
    ],
  },
  {
    meetingTitle: "Monthly Project Review",
    timeRange: "1:00pm - 2:00pm",
    imageUrls: [
      "https://pixlr.com/images/index/remove-bg.webp",
      "https://pixlr.com/images/index/remove-bg.webp",
      "https://pixlr.com/images/index/remove-bg.webp",
    ],
  },
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
  },
];

const RecentMeetings = () => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col bg-white shadow-md border p-2 md:h-[425px] overflow-auto scrollbar-hide">
      <Title className="flex items-center justify-center" level={3}>
        Upcoming Meetings
      </Title>
      <div className="w-full ">
        {meetings.map((meeting, i) => {
          return (
            <div className="w-full flex items-center p-1 rounded-md border border-gray-500 shadow-lg">
              <div className="ps-auto w-1/5">
                <div className="flex items-center justify-center p-1 rounded-md border border-gray-100 shadow-sm">
                  <h2>LM</h2>
                </div>
              </div>
              <div className=" p-1 w-3/5 flex flex-col">
                <h5>{meeting.meetingTitle}</h5>
                <p>{meeting.timeRange}</p>
              </div>
              <div className="p-1 w-1/5">
                {meeting.imageUrls.map((image, i) => {
                  return (
                    <img
                      src={image}
                      alt="react logo"
                      className="rounded-full border border-gray-100 shadow-sm"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentMeetings;

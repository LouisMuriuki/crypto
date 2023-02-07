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
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
  },
  {
    meetingTitle: "Quarterly Business Review",
    timeRange: "3:00pm - 4:30pm",
    imageUrls: ["https://pixlr.com/images/index/remove-bg.webp"],
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
    <div className="flex flex-col bg-[#f7faf9] shadow-md border md:h-[470px] ">
      <div className="flex items-center justify-center py-0">
        <h3 className="text-lg underline underline-offset-4 "> Upcoming Meetings</h3>
      </div>
      <div className="w-full mb-4 overflow-auto p-2 scrollbar-hide">
        {meetings.map((meeting, i) => {
          return (
            <div className="w-full md:h-[100px] bg-white flex items-center justify-center p-1 rounded-md border border-gray-500 shadow mb-6">
              <div className="p-4 w-1/5">
                <div className="flex items-center justify-center p-1 rounded-md border border-gray-100 shadow-sm bg-amber-100">
                  <h2 className="text-[#242424]">CEO</h2>
                </div>
              </div>
              <div className=" px-2  w-3/5 flex justify-between flex-col">
                <h5 className="text-lg py-1 leading-3 my-auto">
                  {meeting.meetingTitle}
                </h5>
                <p className="text-base py-1  my-auto">{meeting.timeRange}</p>
              </div>
              <div className="p-1 flex items-center justify-center w-1/5">
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

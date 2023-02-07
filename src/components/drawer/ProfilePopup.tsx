import React, { useContext, useState } from "react";
import { Avatar, Button, Modal } from "antd";
import DrawerContext from "../../context/DrawerContext";
import { LogoutOutlined } from "@ant-design/icons";
const ProfilePopup = () => {
  const { profileModalOpen, setProfileModalOpen } = useContext(DrawerContext);

  const handleCancel = () => {
    setProfileModalOpen(false);
  };

  return (
    <>
      <Modal
        style={{ position: "absolute", top: 60, right: 20 }}
        open={profileModalOpen}
        onCancel={handleCancel}
        closable={false}
        bodyStyle={{ height: 230 }}
        width={200}
        footer={null}
      >
        <div className="flex flex-col items-center p-0">
          <div className="cursor-pointer">
            <Avatar
              style={{ marginBottom: 5 }}
              size={54}
              src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
            />
          </div>
          <p className="p-0 my-3 text-base">louis hugo</p>
          <p className="p-0 my-2 text-base">lui@admin.com</p>
          <p className="p-0 my-2 text-base">Account</p>
          <hr />
          <div>
            <Button danger icon={<LogoutOutlined />}>
              Logout
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfilePopup;

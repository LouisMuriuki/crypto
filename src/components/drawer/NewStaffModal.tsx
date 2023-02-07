import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import DrawerContext from "../../context/DrawerContext";
import NewStaffForm from "../forms/NewStaffForm";
import "./modal.css"
const NewStaffModal = () => {
  const { newstaffmodalopen, setNewStaffModalOpen } = useContext(DrawerContext);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setNewStaffModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Modal
        title="Add New Staff"
        centered
        open={newstaffmodalopen}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        className="flex flex-col"
        onCancel={() => setNewStaffModalOpen(false)}
        width={1000}
      >
        <div className="mt-8">
          <NewStaffForm />
        </div>
      </Modal>
    </>
  );
};

export default NewStaffModal;

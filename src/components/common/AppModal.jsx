import React, { useState } from "react";
import { Button, Modal } from "antd";

const AppModal = ({ type, name, title, width, footer, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type={type} onClick={showModal}>
        {name}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        okText="Xác nhận"
        cancelText="Hủy"
        onOk={handleOk}
        onCancel={handleCancel}
        width={width}
        destroyOnClose
        footer={footer}
      >
        {children}
      </Modal>
    </>
  );
};

export default AppModal;

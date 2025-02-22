import React from "react";
import { Button, message, Space } from "antd";

const AppMessage = ({ type }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };

  if (type == "success") {
    success();
  } else if (type == "error") {
    error();
  } else if (type == "warning") {
    warning();
  }

  return <>{contextHolder}</>;
};

export default AppMessage;

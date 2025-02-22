import { RadiusUprightOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React, { useEffect } from "react";

const AppNotify = (props) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement = "topRight") => {
    switch (props.type) {
      case "success":
        api.success({
          message: props.message,
          description: props.description,
          placement,
          showProgress: true,
        });
        break;

      case "info":
        api.info({
          message: props.message,
          description: props.description,
          placement,
          showProgress: true,
        });
        break;

      case "warning":
        api.warning({
          message: props.message,
          description: props.description,
          placement,
          showProgress: true,
        });
        break;

      case "error":
        api.error({
          message: props.message,
          description: props.description,
          placement,
          showProgress: true,
        });
        break;

      default:
        api.info({
          message: props.message,
          description: props.description,
          placement,
          showProgress: true,
        });
        break;
    }
  };

  useEffect(() => {
    openNotification(props.placement);
  });
  return <>{contextHolder}</>;
};

export default AppNotify;

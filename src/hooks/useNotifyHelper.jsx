import React, { useState } from "react";
import { AppNotify } from "~/components/common";

const useNotifyHelper = () => {
  const [notifyProps, setNotifyProps] = useState(null);

  const notifyHelper = (type, message, description, placement = "topRight") => {
    setNotifyProps({
      type,
      message,
      description,
      placement,
    });
    setTimeout(() => setNotifyProps(null), 3000);
  };

  return {
    notifyHelper,
    notifyComponent: notifyProps && <AppNotify {...notifyProps} />,
  };
};

export default useNotifyHelper;

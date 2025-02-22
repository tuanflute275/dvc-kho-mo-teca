import React from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const AppButton = (props) => {
  return (
    <Tooltip title={props.title}>
      {props.disabled ? (
        <Button
          type={props.type}
          variant={props.variant}
          style={{
            backgroundColor: props.bg,
            color: props.color,
            
          }}
          disabled
        >
          {props.icon}
          {props.text}
        </Button>
      ) : (
        <Button
          type={props.type}
          variant={props.variant}
          style={{
            backgroundColor: props.bg,
            color: props.color,
          }}
          onClick={props.onClick}
        >
          {props.icon}
          {props.text}
        </Button>
      )}
    </Tooltip>
  );
};

export default AppButton;

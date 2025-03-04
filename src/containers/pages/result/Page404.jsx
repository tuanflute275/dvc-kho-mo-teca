import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => { navigate(-1) }}>Come back.</Button>}
    />
  );
};

export default Page404;

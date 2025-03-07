import React from "react";
import styless from "./sidebar.module.scss";
import Sider from "antd/es/layout/Sider";
import classNames from "classnames/bind";

const cx = classNames.bind(styless);

const SideBar = () => {
  return (
    <Sider width="25%" className={cx("sidebar")}>

    </Sider>
  );
};

export default SideBar;

import React from "react";
import { Flex, Layout } from "antd";
import SideBar from "./sidebar/SideBar";
import AppFooter from "./footer/AppFooter";
import AppHeader from "./header/AppHeader";
import "./masterLayout.scss"
import { Content } from "antd/es/layout/layout";

const MasterLayout = ({ child }) => {
  return (
    <Flex gap="middle" wrap>
      <Layout className="layout">
        <SideBar></SideBar>
        <Layout>
          <AppHeader></AppHeader>
          <Content style={{ flex: 1 }}>{child}</Content>
          <AppFooter></AppFooter>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default MasterLayout;

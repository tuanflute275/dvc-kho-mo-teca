import React from 'react';
import { Flex, Layout } from 'antd';
import SideBar from './sidebar/SideBar';
import AppFooter from './footer/AppFooter';
import AppHeader from './header/AppHeader';
import './masterLayout.scss';
import { Content } from 'antd/es/layout/layout';
import PropTypes from 'prop-types';

const MasterLayout = ({ child }) => {
    return (
        <Flex gap="middle" wrap>
            <Layout className="layout">
                <SideBar></SideBar>
                <Layout>
                    <AppHeader></AppHeader>
                    <Content style={{ flex: 1 }}>{React.Children.only(child)}</Content>
                    <AppFooter></AppFooter>
                </Layout>
            </Layout>
        </Flex>
    );
};

MasterLayout.propTypes = {
    child: PropTypes.node.isRequired,
};
export default MasterLayout;

import React from 'react';
import { Flex, Layout } from 'antd';
import AppFooter from './footer/AppFooter';
import AppHeader from './header/AppHeader';
import style from './masterLayout.module.scss';
import { Content } from 'antd/es/layout/layout';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(style)

const MasterLayout = ({ child }) => {
  return (
    <Flex gap="middle" wrap>
      <Layout className={cx("layout")}>
        <Layout>
          <AppHeader></AppHeader>
          <Content>{React.Children.only(child)}</Content>
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

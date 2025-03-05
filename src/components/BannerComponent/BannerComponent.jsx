import { SearchOutlined } from '@ant-design/icons';
import { Col, Flex, Layout, Row } from 'antd';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { AppButton, AppInput } from '../common';
import styles from './bannerComponent.module.scss';

const cx = classNames.bind(styles);

function BannerComponent({ isHienThiInput, handleSubmitForm }) {
    const [postData, setPostData] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        let sanitizedValue = value.replace(/[\/_<>?|\\;:,.@#$%!^&*(){}\[\]]/g, '');
        sanitizedValue = sanitizedValue.replace(/\s{2,}/g, ' ');
        setPostData(sanitizedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitForm(postData);
    };

    return (
        <Layout className={cx('search_component')}>
            {isHienThiInput && (
                <Row justify="space-between" align="middle">
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} hidden></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                        <form onSubmit={e => handleSubmit(e)} method="POST">
                            <Flex justify="center" align="middle">
                                <AppInput
                                    type="text"
                                    placeholder="Nhập từ khoá để tìm kiếm"
                                    value={postData}
                                    className={cx("search_form")}
                                    name="search"
                                    onChange={handleChange}
                                />
                                <AppButton
                                    type="primary"
                                    className={cx("submit_search")}
                                    icon={<SearchOutlined />}
                                    title="Tìm kiếm"
                                    onClick={e => handleSubmit(e)}
                                />
                            </Flex>
                        </form>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} hidden></Col>
                </Row>
            )}
        </Layout>
    );
}

export default BannerComponent;
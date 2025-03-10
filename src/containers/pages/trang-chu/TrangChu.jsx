/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Col, Flex, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './trangChu.scss';
import { useTranslate } from '~/context/LanguageContext';
import icon from '~/assets/images/icon.jpg';
import banner from '~/assets/images/bannner1.png';

const TrangChu = () => {
    const { t } = useTranslate();
    return (
        <>
            <div className="banner">
                <div className="container-home">
                    <Row align="middle" justify="center" gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div style={{ background: '#ddd', padding: '20px' }}>Cột 1</div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div style={{ background: '#bbb', padding: '20px' }}>Cột 2</div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="content">
                <div className="container-home list-options">
                    <Flex justify="center" wrap="wrap" gap="small">
                        <NavLink to={'/don-vi'}>
                            <Card
                                hoverable
                                className="custom-card"
                                cover={
                                    <div className="icon-view">
                                        <img className="image-icon" alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuXemNhieuNhat')} />
                            </Card>
                        </NavLink>
                        <NavLink to={'/'}>
                            <Card
                                hoverable
                                className="custom-card"
                                cover={
                                    <div className="icon-view">
                                        <img className="image-icon" alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuMoiNhat')} />
                            </Card>
                        </NavLink>
                        <NavLink to={'/'}>
                            <Card
                                hoverable
                                className="custom-card"
                                cover={
                                    <div className="icon-view">
                                        <img className="image-icon" alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuTheoLinhVuc')} />
                            </Card>
                        </NavLink>
                        <NavLink to={'/'}>
                            <Card
                                hoverable
                                className="custom-card"
                                cover={
                                    <div className="icon-view">
                                        <img className="image-icon" alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuTheoDonVi')} />
                            </Card>
                        </NavLink>
                    </Flex>
                </div>
            </div>
        </>
    );
};

export default TrangChu;

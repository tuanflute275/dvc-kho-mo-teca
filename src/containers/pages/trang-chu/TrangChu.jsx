/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Col, Flex, Input, Row, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslate } from '~/context/LanguageContext';
import icon from '~/assets/images/icon.jpg';
import classNames from 'classnames/bind';
import styles from './trangChu.module.scss';

const { Title, Paragraph } = Typography;
const { Search } = Input;

const cx = classNames.bind(styles);

const TrangChu = () => {
    const { t } = useTranslate();
    return (
        <>
            <div className={cx("open-data-landing")}>
                <Row justify="center" align="middle" className={cx("landing-content")} gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} className={cx("landing-text")}>
                        <Title level={2} className={cx("landing-title")}>
                            Kho Dữ Liệu Với <span className={cx("count")}>20000</span> Bộ Dữ Liệu.
                        </Title>

                        <Paragraph className={cx("landing-subtitle")}>
                            Hỗ trợ tổ chức cá nhân tra cứu dữ liệu mở, chia sẻ dữ liệu đến cộng đồng
                        </Paragraph>

                        <Search
                            placeholder="Nhập từ khóa để tìm kiếm"
                            enterButton
                            size="large"
                            className={cx("search-input")}
                        />

                        <div className={cx("open-data-description")}>
                            <Paragraph className={cx("description-text")}>
                                Dữ liệu mở (Open Data) là dữ liệu được công khai và tự do sử dụng,
                                tái sử dụng và phân phối bởi một người mà không bị hạn chế bởi các
                                quy định về bản quyền, quyền sở hữu hoặc các ràng buộc pháp lý khác.
                            </Paragraph>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={12} className={cx("landing-graphic")}>
                        <img
                            src="https://placehold.co/600x400"
                            alt="Data Storage"
                            className={cx("graphic-image")}
                        />
                    </Col>
                </Row>
            </div>
            <div className={cx("content")}>
                <div className={cx("container", "list-options")}>
                    <Flex justify="center" wrap="wrap" gap="small">
                        <NavLink to={'/don-vi'}>
                            <Card
                                hoverable
                                className={cx("custom-card")}
                                cover={
                                    <div className={cx("icon-view")}>
                                        <img className={cx("image-icon")} alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuXemNhieuNhat')} />
                            </Card>
                        </NavLink>
                        <NavLink to={'/'}>
                            <Card
                                hoverable
                                className={cx("custom-card")}
                                cover={
                                    <div className={cx("icon-view")}>
                                        <img className={cx("image-icon")} alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuMoiNhat')} />
                            </Card>
                        </NavLink>
                        <NavLink to={'/'}>
                            <Card
                                hoverable
                                className={cx("custom-card")}
                                cover={
                                    <div className={cx("icon-view")}>
                                        <img className={cx("image-icon")} alt="image" src={icon} />
                                    </div>
                                }
                            >
                                <Meta title={t('trangChu.duLieuTheoLinhVuc')} />
                            </Card>
                        </NavLink>
                        <NavLink to={'/'}>
                            <Card
                                hoverable
                                className={cx("custom-card")}
                                cover={
                                    <div className={cx("icon-view")}>
                                        <img className={cx("image-icon")} alt="image" src={icon} />
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

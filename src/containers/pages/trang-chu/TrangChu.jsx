/* eslint-disable jsx-a11y/img-redundant-alt */
import { SearchOutlined } from '@ant-design/icons';
import { Card, Col, Flex, Row, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '~/assets/images/icon.jpg';
import { AppButton, AppInput } from '~/components/common';
import { useTranslate } from '~/context/LanguageContext';
import styles from './trangChu.module.scss';

const { Title, Paragraph } = Typography;

const cx = classNames.bind(styles);

const TrangChu = () => {
    const [postData, setPostData] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        let sanitizedValue = value.replace(/[_<>?|\\;:,.@#$%!^&*(){}\[\]]/g, '');
        sanitizedValue = sanitizedValue.replace(/\s{2,}/g, ' ');
        setPostData(sanitizedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const { t } = useTranslate();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    }, [])

    return (
        <>
            <div className={cx("open-data-landing")}>
                <Row justify="space-between" align="middle" className={cx("landing-content")} gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} className={cx("landing-text")}>
                        <Title level={2} className={cx("landing-title")}>
                            {t("trangChu.landingTitleP1")} <span className={cx("count")}>20.000</span> {t("trangChu.landingTitleP2")}
                        </Title>

                        <Paragraph className={cx("landing-subtitle")}>
                            {t("trangChu.landingSubtitle")}
                        </Paragraph>

                        <form method="POST" onSubmit={e => handleSubmit(e)} className={cx("search-input")}>
                            <Flex justify="center" align="middle">
                                <AppInput
                                    type="text"
                                    placeholder={t("app.searchPlaceholder")}
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

                        <div className={cx("open-data-description")}>
                            <span className={cx("corner", "bottom-left")}></span>
                            <span className={cx("corner", "bottom-right")}></span>
                            <Paragraph className={cx("description-text")}>
                                <span className={cx("count")}>{t("trangChu.landingMotaP1")}</span> {t("trangChu.landingMotaP2")}
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
                        <NavLink to={'/linh-vuc'}>
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

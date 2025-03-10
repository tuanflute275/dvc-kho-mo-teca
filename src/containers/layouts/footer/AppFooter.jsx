import React from 'react';
import { Col, Layout, Row } from 'antd';
import logo from '~/assets/images/logo.png';
import app_footer_style from './appFooter.module.scss';
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslate } from '~/context/LanguageContext';
import classNames from 'classnames/bind';

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

const cx = classNames.bind(app_footer_style)

const AppFooter = () => {
    const { t } = useTranslate();
    return (
        <Footer className={cx("footer")}>
            <Row justify="space-between" className={cx("footer-content")}>
                <Col xs={24} sm={12} md={6} className={cx("footer-logo")}>
                    <img src={logo} alt="Logo" className={cx("footer-logo-img")} />
                    <Title level={3} className={cx("footer-name")}>
                        {t('app.tieuDe')}
                    </Title>
                </Col>

                <Col xs={24} sm={12} md={8} className={cx("footer-contact")}>
                    <Title level={4} className={cx("footer-title")}>
                        {t('app.chuyenDoiSo')}
                    </Title>
                    <Paragraph>
                        <FaMapMarkerAlt /> {t('app.diaChi')}
                    </Paragraph>
                    <Paragraph>
                        <FaPhoneAlt /> {t('app.dienThoai')}
                    </Paragraph>
                    <Paragraph>
                        <FaFax /> {t('app.fax')}
                    </Paragraph>
                    <Paragraph>
                        <MdEmail /> {t('app.email')}
                    </Paragraph>
                </Col>

                <Col xs={24} sm={12} md={6} className={cx("footer-info")}>
                    <Title level={4} className={cx("footer-title")}>
                        {t('app.thongTin')}
                    </Title>
                    <Link href="/lien-he" className={cx("footer-link")}>
                        {t('app.lienHe')}
                    </Link>
                    <Link href="/gioi-thieu" className={cx("footer-link")}>
                        {t('app.gioiThieu')}
                    </Link>
                    <Link href="/dieu-khoan-su-dung" className={cx("footer-link")}>
                        {t('app.dieuKhoanSuDung')}
                    </Link>
                    <Link href="/chinh-sach-bao-mat" className={cx("footer-link")}>
                        {t('app.chinhSachBaoMat')}
                    </Link>
                </Col>
            </Row>

            <Row justify="start">
                <Col xs={24} className={cx("footer-bottom")}>
                    <div className={cx("footer-container")}>
                        <Paragraph className={cx("footer-copyright")}> {t('app.banQuyen')}</Paragraph>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
};

export default AppFooter;

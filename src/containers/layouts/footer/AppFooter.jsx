import React from 'react';
import { Col, Layout, Row } from 'antd';
import logo from '~/assets/images/logo.png';
import './appFooter.scss';
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslate } from '~/context/LanguageContext';

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

const AppFooter = () => {
    const { t } = useTranslate();
    return (
        <Footer className="footer">
            <Row justify="space-between" className="footer-content">
                <Col xs={24} sm={12} md={6} className="footer-logo">
                    <img src={logo} alt="Logo" className="footer-logo-img" />
                    <Title level={3} className="footer-name">
                        {t('app.tieuDe')}
                    </Title>
                </Col>

                <Col xs={24} sm={12} md={8} className="footer-contact">
                    <Title level={4} className="footer-title">
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

                <Col xs={24} sm={12} md={6} className="footer-info">
                    <Title level={4} className="footer-title">
                        {t('app.thongTin')}
                    </Title>
                    <Link href="/lien-he" className="footer-link">
                        {t('app.lienHe')}
                    </Link>
                    <Link href="/gioi-thieu" className="footer-link">
                        {t('app.gioiThieu')}
                    </Link>
                    <Link href="/dieu-khoan-su-dung" className="footer-link">
                        {t('app.dieuKhoanSuDung')}
                    </Link>
                    <Link href="/chinh-sach-bao-mat" className="footer-link">
                        {t('app.chinhSachBaoMat')}
                    </Link>
                </Col>
            </Row>

            <Row justify="start">
                <Col xs={24} className="footer-bottom">
                    <div className="footer-container">
                        <Paragraph className="footer-copyright"> {t('app.banQuyen')}</Paragraph>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
};

export default AppFooter;

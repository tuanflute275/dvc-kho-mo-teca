import React from 'react';
import { Col, Layout, Row } from 'antd'; 
import './appFooter.scss';
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Typography } from 'antd';
import { Link, NavLink } from 'react-router-dom';
const { Title, Paragraph } = Typography;
const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="footer">
            <Row justify="space-between" className="footer-content">
                <Col xs={24} sm={12} md={6} className="footer-logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/1200px-Emblem_of_Vietnam.svg.png"
                        alt="Logo"
                        className="footer-logo-img"
                    />
                    <Title level={3} className="footer-name">
                        CỔNG DỮ LIỆU MỞ
                    </Title>
                </Col>

                <Col xs={24} sm={12} md={8} className="footer-contact">
                    <Title level={4} className="footer-title">
                        TRUNG TÂM CHUYỂN ĐỔI SỐ
                    </Title>
                    <Paragraph>
                        <FaMapMarkerAlt /> Địa chỉ: 6/15 Duy Tân, P.Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                    </Paragraph>
                    <Paragraph>
                        <FaPhoneAlt /> Điện thoại: 0322554555 - 0320000022
                    </Paragraph>
                    <Paragraph>
                        <FaFax /> Fax: 0322554555 - 0320000022
                    </Paragraph>
                    <Paragraph>
                        <MdEmail /> Email: trungtamdulieu@ttdl.gov.vn
                    </Paragraph>
                </Col>

                <Col xs={24} sm={12} md={6} className="footer-info">
                    <Title level={4} className="footer-title">
                        THÔNG TIN
                    </Title>
                    <Link href="/contact" className="footer-link">
                        Liên hệ
                    </Link>
                    <Link href="/about" className="footer-link">
                        Giới thiệu
                    </Link>
                    <Link href="/terms" className="footer-link">
                        Điều khoản sử dụng
                    </Link>
                    <Link href="/privacy-policy" className="footer-link">
                        Chính sách bảo mật
                    </Link>
                </Col>
            </Row>

            <Row justify="start">
                <Col xs={24} className="footer-bottom">
                    <div className="footer-container">
                        <Paragraph className="footer-copyright">© Bản quyền thuộc về BCA</Paragraph>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
};

export default AppFooter;

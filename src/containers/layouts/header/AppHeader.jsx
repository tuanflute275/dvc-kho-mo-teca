import React, { useState } from 'react';
import './appHeader.scss';
import { Header } from 'antd/es/layout/layout';
import { AppButton } from '~/components/common';
import { Row, Col, Select, Drawer, Button } from 'antd';
import { useTranslate } from '~/context/LanguageContext';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const AppHeader = () => {
    const { t, language, setLanguage } = useTranslate();
    const [open, setOpen] = useState(false);

    const languageOptions = [
        { value: 'vi', label: <img src="https://flagcdn.com/w40/vn.png" alt="Vietnamese" className="flag-icon" /> },
        { value: 'en', label: <img src="https://flagcdn.com/w40/gb.png" alt="English" className="flag-icon" /> },
        { value: 'zh', label: <img src="https://flagcdn.com/w40/cn.png" alt="Chinese" className="flag-icon" /> },
    ];

    return (
        <>
            <Header className="header">
                <div className="header-container">
                    <Row justify="space-between" align="middle" className="header-row">
                        <Col xs={24} sm={12} md={8} className="logo-container">
                            <div className="logo">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/1200px-Emblem_of_Vietnam.svg.png"
                                    alt="Logo"
                                />
                                <h2 className="header-title">{t('trangChu.tieuDe')}</h2>
                            </div>
                        </Col>

                        <Col xs={24} sm={12} md={8} className="header-right">
                            <Row justify="end" align="middle" gutter={[10, 10]}>
                                <Col>
                                    <Select
                                        defaultValue={language}
                                        onChange={setLanguage}
                                        className="language-select"
                                        options={languageOptions}
                                        dropdownMatchSelectWidth={false}
                                    />
                                </Col>
                                <Col>
                                    <AppButton className="btn-login" text={t('trangChu.dangNhap')} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Header>

            <div className="sub-header">
                <div className="container">
                    <Row justify="start" align="middle">
                        <Col xs={24} sm={20} md={16}>
                            <nav className="menu">
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Trang chủ
                                </NavLink>
                                <NavLink to="/data" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Dữ liệu
                                </NavLink>
                                <NavLink to="/unit" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Đơn vị
                                </NavLink>
                                <NavLink to="/field" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Lĩnh vực
                                </NavLink>
                                <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Tin tức
                                </NavLink>
                            </nav>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default AppHeader;

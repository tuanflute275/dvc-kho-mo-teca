import React, { useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import { AppButton } from '~/components/common';
import { Row, Col, Select, Drawer, Button, Flex } from 'antd';
import { useTranslate } from '~/context/LanguageContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import logo from '~/assets/images/logo.png';
import viIcon from '~/assets/images/language/vi.png';
import enIcon from '~/assets/images/language/en.png';
import zhIcon from '~/assets/images/language/zh.png';
import classNames from 'classnames/bind';
import styles from './appHeader.module.scss';

const cx = classNames.bind(styles)

const AppHeader = () => {
    const { t, language, setLanguage } = useTranslate();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const languageOptions = [
        { value: 'vi', label: <img src={viIcon} alt="Vietnamese" className="flag-icon" /> },
        { value: 'en', label: <img src={enIcon} alt="English" className="flag-icon" /> },
        { value: 'zh', label: <img src={zhIcon} alt="Chinese" className="flag-icon" /> },
    ];

    const handleNavigateLogin = () => {
        navigate('/login');
    };
    return (
        <>
            <Header className={cx("header")}>
                <div className={cx("header-desktop")}>
                    <div className={cx("header-container")}>
                        <Row justify="space-between" align="middle" className={cx("header-row")}>
                            <Col xs={12} sm={12} md={8} className={cx("logo-container")}>
                                <NavLink to="/" className={({ isActive }) => (isActive ? cx('active') : '')}>
                                    <div className={cx("logo")}>
                                        <img src={logo} alt="Logo" />
                                        <h2 className={cx("header-title")}>{t('app.tieuDe')}</h2>
                                    </div>
                                </NavLink>
                            </Col>

                            <Col xs={24} sm={12} md={8} className={cx("header-right")}>
                                <Row justify="center" align="middle" gutter={[10, 10]}>
                                    <div className={cx("flag-header")}>
                                        <Col>
                                            <Select
                                                defaultValue={language}
                                                onChange={setLanguage}
                                                className={cx("language-select")}
                                                options={languageOptions}
                                                dropdownMatchSelectWidth={false}
                                            />
                                        </Col>
                                    </div>
                                    <div className={cx("btn-login")}>
                                        <Col>
                                            <AppButton
                                                onClick={handleNavigateLogin}
                                                variant="solid"
                                                text={t('app.dangNhap')}
                                            />
                                        </Col>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={cx("header-mobile")}>
                    <div className={cx("header-container")}>
                        <Row justify="space-between" align="middle" className={cx("header-row")}>
                            <Col xs={12} sm={12} md={8} className={cx("logo-container")}>
                                <div className={cx("logo")}>
                                    <img src={logo} alt="Logo" />
                                    <h2 className={cx("header-title")}>{t('app.tieuDe')}</h2>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} className="mobile-menu-button">
                                <Button type="primary" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
                            </Col>

                            <Col xs={4} sm={4} md={6} className={cx("header-right")}>
                                <Row justify="center" align="middle" gutter={[10, 10]}>
                                    <div className={cx("flag-header")}>
                                        <Col>
                                            <Select
                                                defaultValue={language}
                                                onChange={setLanguage}
                                                className={cx("language-select")}
                                                options={languageOptions}
                                                popupMatchSelectWidth={false}
                                                suffixIcon={null}
                                            />
                                        </Col>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Header>

            <div>
                <div className={cx("sub-header")}>
                    <div className={cx("container")}>
                        <Row justify="space-between" align="middle">
                            <Col xs={24} sm={24} md={24} className={cx("desktop-menu")}>
                                <nav className={cx("menu")}>
                                    <Flex wrap>
                                        <NavLink to="/" className={({ isActive }) => (isActive ? cx('active') : '')}>
                                            {t('app.trangChu')}
                                        </NavLink>
                                        <NavLink to="/du-lieu" className={({ isActive }) => (isActive ? cx('active') : '')}>
                                            {t('app.duLieu')}
                                        </NavLink>
                                        <NavLink to="/don-vi" className={({ isActive }) => (isActive ? cx('active') : '')}>
                                            {t('app.donVi')}
                                        </NavLink>
                                        <NavLink
                                            to="/linh-vuc"
                                            className={({ isActive }) => (isActive ? cx('active') : '')}
                                        >
                                            {t('app.linhVuc')}
                                        </NavLink>
                                        <NavLink to="/tin-tuc" className={({ isActive }) => (isActive ? cx('active') : '')}>
                                            {t('app.tinTuc')}
                                        </NavLink>
                                    </Flex>
                                </nav>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Drawer title="Danh mục" placement="right" onClose={() => setOpen(false)} open={open}>
                    <nav className="menu-mobile">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            {t('app.trangChu')}
                        </NavLink>
                        <NavLink to="/du-lieu" className={({ isActive }) => (isActive ? 'active' : '')}>
                            {t('app.duLieu')}
                        </NavLink>
                        <NavLink to="/don-vi" className={({ isActive }) => (isActive ? 'active' : '')}>
                            {t('app.donVi')}
                        </NavLink>
                        <NavLink to="/linh-vuc" className={({ isActive }) => (isActive ? 'active' : '')}>
                            {t('app.linhVuc')}
                        </NavLink>
                        <NavLink to="/tin-tuc" className={({ isActive }) => (isActive ? 'active' : '')}>
                            {t('app.tinTuc')}
                        </NavLink>
                        <div className="btn-login-mobile">
                            <AppButton onClick={handleNavigateLogin} text={t('app.dangNhap')} />
                        </div>
                    </nav>
                </Drawer>
            </div>
        </>
    );
};

export default AppHeader;

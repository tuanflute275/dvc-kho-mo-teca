import { EyeFilled } from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Row } from 'antd';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AppButton } from '~/components/common';
import { useTranslate } from '~/context/LanguageContext';
import ChiTietDuLieuStyles from './chiTietDuLieu.module.scss';
import BannerComponent from '~/components/BannerComponent/BannerComponent';
import { useEffect } from 'react';
const cx = classNames.bind(ChiTietDuLieuStyles);
function ChiTietDuLieu() {
    const { t } = useTranslate();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    }, [])

    return (
        <div>
            <BannerComponent />
            <Layout className={cx('container')}>

                <Row gutter={16}>
                    <div div className={cx('breadcrumb-left')}>
                        <Breadcrumb separator=">>">
                            <Breadcrumb.Item><a href="/">{t('chiTietDuLieu.trangChu')}</a></Breadcrumb.Item>
                            <Breadcrumb.Item>{t('chiTietDuLieu.duLieuTimKiem')}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Col xs={24} md={8} className={cx('border')}>

                        <span className={cx('height')}>{t('chiTietDuLieu.thongTin')}</span>
                        <div className={cx('box')}>
                            <div className={cx('border1')}>
                                Đoạn văn là một khái niệm quan trọng trong viết văn, tạo nên sự tổ chức và sắp xếp logic
                                cho nội dung. Nó không chỉ mang trong mình một nội dung nhất định mà còn phản ánh sự
                                phân đoạn hình thức của văn bản. Mỗi đoạn văn thường bắt đầu bằng một câu chủ đề hoặc
                                một ý chính, từ đó phát triển và mở rộng ý kiến, thông tin hoặc quan điểm của tác giả.
                                Các câu trong đoạn văn liên kết với nhau thông qua những từ nối, ví dụ như "thêm vào
                                đó", "tuy nhiên", "do đó", để tạo sự mạch lạc và logic cho nội dung.
                            </div>
                            <div className={cx('text_right')}>
                                <EyeFilled style={{ marginRight: '5px', display: 'inline' }} />
                                2000 {t('chiTietDuLieu.luotXem')}
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={16} className={cx('col_right')}>
                        <div className={cx('breadcrumb-right')}>
                            <Breadcrumb separator=">>">
                                <Breadcrumb.Item><a href="/">{t('chiTietDuLieu.trangChu')}</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{t('chiTietDuLieu.duLieuTimKiem')}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div className={cx('padding')}>
                            <span className={cx('counting', 'title')}>500</span>{' '}
                            <span className={cx('title')}>{t('chiTietDuLieu.boDuLieuDuocTimThay')}</span>
                        </div>

                        <div className={cx('border')}>
                            <div className={cx('width')}>
                                <div className={cx('margin')}>
                                    <p className={cx('col_right_title')}>
                                        Danh sách các siêu thị trên địa bàn thành phố năm 2024
                                    </p>
                                    <p className={cx('padding_title')}>{t('chiTietDuLieu.ngayCapNhat')}: <span className={cx('padding_title_item')}>02/02/2025.</span></p>

                                    <p className={cx('padding_title')}>{t('chiTietDuLieu.donViCungCapDuLieu')}: <span className={cx('padding_title_item')}>Sở công thương.</span></p>
                                    <p className={cx('padding_title')}>{t('chiTietDuLieu.linhVuc')}: <span className={cx('padding_title_item')}>xã hội, dân sinh.</span></p>
                                    <p className={cx('padding_title')}>{t('chiTietDuLieu.taiLieuDinhKem')}: <Link className={cx('padding_title_item', 'blue')} to="/">Danh_sach_cho_2024.xlsx</Link></p>
                                    <Row wrap="wrap" gap="middle" className={cx('paddingbutton')}>
                                        <Col><AppButton className={cx('buttonsize')} bg={'#F4A460'} text={t('chiTietDuLieu.pdf')} /></Col>
                                        <Col><AppButton className={cx('buttonsize')} bg={'#00CD00'} text={t('chiTietDuLieu.excel')} /></Col>
                                        <Col><AppButton className={cx('buttonsize')} bg={'#4169E1'} text={t('chiTietDuLieu.word')} /></Col>
                                        <Col><AppButton className={cx('buttonsize')} bg={'#CD853F'} text={t('chiTietDuLieu.csv')} /></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <AppButton
                            className={cx('btn_xem')}
                            variant="solid"
                            text={t('chiTietDuLieu.xemTruoc')}
                        ></AppButton>
                        <div>
                            <img style={{ width: "100%" }} src="https://placehold.co/700x300" alt="" />
                            <p style={{ paddingTop: "10px", fontWeight: "bold" }}>{t('chiTietDuLieu.thongTinDuLieu')}</p>
                            <div className={cx('padding')}>
                                Đoạn văn là một khái niệm quan trọng trong viết văn, tạo nên sự tổ chức và sắp xếp logic
                                cho nội dung. Nó không chỉ mang trong mình một nội dung nhất định mà còn phản ánh sự
                                phân đoạn hình thức của văn bản. Mỗi đoạn văn thường bắt đầu bằng một câu chủ đề hoặc
                                một ý chính, từ đó phát triển và mở rộng ý kiến, thông tin hoặc quan điểm của tác giả.
                                Các câu trong đoạn văn liên kết với nhau thông qua những từ nối, ví dụ như "thêm vào
                                đó", "tuy nhiên", "do đó", để tạo sự mạch lạc và logic cho nội dung.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
}

export default ChiTietDuLieu;

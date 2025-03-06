import {Layout, Col, Flex, Row} from 'antd';
import classNames from 'classnames/bind';
import React from 'react'
import BannerComponent from '~/components/BannerComponent/BannerComponent'
import ChiTietDuLieuStyles from './ChiTietDuLieu.module.scss'
import Meta from 'antd/es/card/Meta';
import { AppButton } from '~/components/common';
import { EyeFilled} from '@ant-design/icons';
const cx = classNames.bind(ChiTietDuLieuStyles);
function ChiTietDuLieu() {
    return (
        <div>
            <BannerComponent />
            <Layout className={cx('container')}>
                <Row gutter={16}>
                    <Col xs={24} md={8} className={cx('border')}>
                        <span className={cx('height')}>Thông tin</span>
                        <div className={cx('box')}>
                            <h4 className={cx('border1')}>
                                Đoạn văn là một khái niệm quan trọng trong viết văn, tạo nên sự tổ chức và sắp xếp logic cho nội dung. 
                                Nó không chỉ mang trong mình một nội dung nhất định mà còn phản ánh sự phân đoạn hình thức của văn bản.
                                Mỗi đoạn văn thường bắt đầu bằng một câu chủ đề hoặc một ý chính, từ đó phát triển và mở rộng ý kiến,
                                thông tin hoặc quan điểm của tác giả. Các câu trong đoạn văn liên kết với nhau thông qua những từ nối,
                                ví dụ như "thêm vào đó", "tuy nhiên", "do đó", để tạo sự mạch lạc và logic cho nội dung.
                            </h4>
                            <div className={cx('text_right')}>
                            <EyeFilled style={{ marginRight: '5px', display: 'inline' }} />2000 lượt xem</div>
                        </div>
                        
                    </Col>

                    <Col xs={24} sm={24} md={16} className={cx("landing-text")}>
                        <div className={cx('card')}><span>Trang chủ -- Dữ liệu</span> <br /></div>
                        
                        <div className={cx('padding')}>
                            <span className={cx('counting', 'title')}>500</span> 
                            {" "}<span className={cx('title')}>bộ dữ liệu đã được tìm thấy</span> 
                        </div>
                        
                        <div className={cx('border')}>
                            <div className={cx('width')}>
                                <div className={cx('margin')}>
                                    <h3 className={cx('card')}>Danh sách các siêu thị trên địa bàn thành phố năm 2024</h3>
                                    <h3>Ngày cập nhật: ..........</h3>
                                    <h3>Đơn vị cung cấp dữ liệu: .........</h3>
                                    <h3>Lĩnh vực: .........</h3>
                                    <h3>Tài liệu đính kèm: ..........</h3>
                                    <Flex wrap="wrap" gap="middle" className={cx('border1')}>
                                        <AppButton className={cx('buttonsize')} bg={"#F4A460"} text="PDF"/>
                                        <AppButton className={cx('buttonsize')} bg={"#00CD00"} text="Excel"/>
                                        <AppButton className={cx('buttonsize')} bg={"#4169E1"} text="Word"/>
                                        <AppButton className={cx('buttonsize')} bg={"#CD853F"} text="CSV"/>
                                    </Flex> 
                                </div>
                                
                            </div>
                        </div>
                        <AppButton
                            className={cx('background_red', 'text_white')}
                            variant="solid"
                            text="Xem Trước">
                        </AppButton>   
                        <div>
                            <img src="https://placehold.co/700x300" alt="" />
                            <div className={cx('border1')}>
                                Đoạn văn là một khái niệm quan trọng trong viết văn, tạo nên sự tổ chức và sắp xếp logic cho nội dung. 
                                Nó không chỉ mang trong mình một nội dung nhất định mà còn phản ánh sự phân đoạn hình thức của văn bản.
                                Mỗi đoạn văn thường bắt đầu bằng một câu chủ đề hoặc một ý chính, từ đó phát triển và mở rộng ý kiến,
                                thông tin hoặc quan điểm của tác giả. Các câu trong đoạn văn liên kết với nhau thông qua những từ nối,
                                ví dụ như "thêm vào đó", "tuy nhiên", "do đó", để tạo sự mạch lạc và logic cho nội dung.
                            </div>
                        </div>                                        
                    </Col>
                </Row>
            </Layout>
            
        </div>
      );
}

export default ChiTietDuLieu
import { Layout, Row } from 'antd';
import { useState } from 'react';
import BannerComponent from '~/components/BannerComponent/BannerComponent';
import './donVi.scss';
import DanhSachDuLieu from '~/components/danhSachDuLieu/danhSachDuLieu';

function DonVi() {
    const [tinhThanhCount, setTinhThanhCount] = useState("64");
    const [boBanCount, setBannedCount] = useState("30");

    const nodata = [];
    const data = [
        { title: "Hà Nội", count: 1500 },
        { title: "Hồ Chí Minh", count: 1500 },
        { title: "Đà Nẵng", count: 1500 },
        { title: "Nam Định", count: 1500 },
        { title: "Nha Trang", count: 1500 },
        { title: "Hòa Bình", count: 1500 },
        { title: "Đà Lạt", count: 1500 },
        { title: "Lâm Đồng", count: 1500 },
        { title: "Bình Dương", count: 1500 },
        { title: "Cần Thơ", count: 1500 },
        { title: "Hải Phòng", count: 1500 },
        { title: "Thanh Hóa", count: 1500 },
        { title: "Nghệ An", count: 1500 },
        { title: "Bắc Ninh", count: 1500 },
        { title: "Thái Nguyên", count: 1500 },
        { title: "Bình Thuận", count: 1500 },
        { title: "Lâm Đồng", count: 1500 },
        { title: "Bình Dương", count: 1500 },
        { title: "Cần Thơ", count: 1500 },
        { title: "Hải Phòng", count: 1500 },
        { title: "Thanh Hóa", count: 1500 },
        { title: "Nghệ An", count: 1500 },
        { title: "Bắc Ninh", count: 1500 },
        { title: "Thái Nguyên", count: 1500 },
        { title: "Bình Thuận", count: 1500 },
        { title: "Lâm Đồng", count: 1500 },
        { title: "Bình Dương", count: 1500 },
        { title: "Cần Thơ", count: 1500 },
        { title: "Hải Phòng", count: 1500 },
        { title: "Thanh Hóa", count: 1500 },
        { title: "Nghệ An", count: 1500 },
        { title: "Bắc Ninh", count: 1500 },
        { title: "Thái Nguyên", count: 1500 },
        { title: "Bình Thuận", count: 1500 },
        { title: "Lâm Đồng", count: 1500 },
        { title: "Bình Dương", count: 1500 },
        { title: "Cần Thơ", count: 1500 },
        { title: "Hải Phòng", count: 1500 },
        { title: "Thanh Hóa", count: 1500 },
        { title: "Nghệ An", count: 1500 },
        { title: "Thanh Hóa", count: 1500 },
        { title: "Nghệ An", count: 1500 },
        { title: "Bắc Ninh", count: 1500 },
        { title: "Thái Nguyên", count: 1500 },
        { title: "Bình Thuận", count: 1500 },
        { title: "Lâm Đồng", count: 1500 },
        { title: "Bình Dương", count: 1500 },
        { title: "Cần Thơ", count: 1500 },
        { title: "Hải Phòng", count: 1500 },
        { title: "Thanh Hóa", count: 1500 },
        { title: "Nghệ An", count: 1500 },
    ];

    return (
        <>
            <BannerComponent isHienThiInput={true} />

            <Layout className='container'>
                <Row gutter={[16, 16]}  >
                    <p className='title'>
                        <span className='counting'>{tinhThanhCount}</span> tỉnh thành phố, <span className='counting'>{boBanCount}</span> bộ ban ngành, cơ quan ngang bộ.
                    </p>
                </Row>

                <DanhSachDuLieu subDomain={"don-vi"} data={data} />
            </Layout >

        </>
    )
}

export default DonVi
import { Layout, Row } from 'antd';
import { useState, useMemo, useEffect } from 'react';
import classNames from 'classnames/bind';
import BannerComponent from '~/components/BannerComponent/BannerComponent';
import DanhSachDuLieu from '~/components/danhSachDuLieu/danhSachDuLieu';
import donViStyle from './donVi.module.scss';
import { useTranslate } from '~/context/LanguageContext';

const cx = classNames.bind(donViStyle);

function DonVi() {
    const initMockdata = [
        { "title": "Y tế", "count": 1500 },
        { "title": "Giáo dục", "count": 1500 },
        { "title": "Công nghệ", "count": 1500 },
        { "title": "Tài chính", "count": 1500 },
        { "title": "Thương mại", "count": 1500 },
        { "title": "Du lịch", "count": 1500 },
        { "title": "Nông nghiệp", "count": 1500 },
        { "title": "Xây dựng", "count": 1500 },
        { "title": "Giao thông", "count": 1500 },
        { "title": "Môi trường", "count": 1500 },
        { "title": "Bất động sản", "count": 1500 },
        { "title": "Năng lượng", "count": 1500 },
        { "title": "Sản xuất", "count": 1500 },
        { "title": "Dịch vụ", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "An ninh", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "An ninh", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 },
        { "title": "An ninh", "count": 1500 },
        { "title": "Văn hóa", "count": 1500 },
        { "title": "Giải trí", "count": 1500 },
        { "title": "Thể thao", "count": 1500 },
        { "title": "Thời trang", "count": 1500 },
        { "title": "Truyền thông", "count": 1500 }
    ]
    const [boBanCount, setBannedCount] = useState("30");
    const [searchData, setSearchData] = useState("");
    const [tinhThanhCount, setTinhThanhCount] = useState("64");
    const { t } = useTranslate();
    const [data, setData] = useState(initMockdata);

    const handleDataFromChild = (searchStr) => {
        console.log(searchStr);
        setSearchData(searchStr);
        // filter data based on search string
        setData(initMockdata.filter(item => item.title.toLowerCase().includes(searchStr.toLowerCase())));
    }

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
        setBannedCount(data.length)


    }, [searchData])

    return (
        <>
            <BannerComponent isHienThiInput={true} handleSubmitForm={handleDataFromChild} />

            <Layout className={cx('container')}>
                <Row gutter={[16, 16]}>
                    <p className={cx('title')}>
                        <span className={cx('counting')}>{tinhThanhCount}</span> {t("donVi.tinhThanhPho")},
                        {" "}<span className={cx('counting')}>{boBanCount}</span> {t("donVi.boBanNganh")}, {t("donVi.cqNgangBo")}.
                    </p>
                </Row>

                <DanhSachDuLieu subDomain={"don-vi"} data={data} />
            </Layout>
        </>
    );
}

export default DonVi;
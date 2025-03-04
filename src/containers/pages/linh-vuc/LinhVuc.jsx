import { Layout, Row } from 'antd';
import { useEffect, useState } from 'react';
import BannerComponent from '~/components/BannerComponent/BannerComponent';
import './linhVuc.scss';
import DanhSachDuLieu from '~/components/danhSachDuLieu/danhSachDuLieu';


function LinhVuc() {
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
        { "title": "An ninh", "count": 1500 }
    ]

    const [count, setCount] = useState("30");
    const [searchData, setSearchData] = useState("");
    const [data, setData] = useState(initMockdata);

    const handleDataFromChild = (searchStr) => {
        console.log(searchStr);
        setSearchData(searchStr);
        // filter data based on search string
        setData(initMockdata.filter(item => item.title.toLowerCase().includes(searchStr.toLowerCase())));
    }

    useEffect(() => {
        setCount(data.length)
    }, [searchData])

    return (
        <>
            <BannerComponent isHienThiInput={true} handleSubmitForm={handleDataFromChild} />

            <Layout className='container'>
                <Row gutter={[16, 16]}  >
                    {
                        searchData ? (
                            <p className='title'>
                                Tìm kiếm thành công: "{searchData}", <span className='counting'>{count}</span> lĩnh vực.
                            </p>
                        ) : (
                            <p className='title'>
                                Tổng số <span className='counting'>{count}</span> lĩnh vực.
                            </p>
                        )
                    }
                </Row>

                <DanhSachDuLieu subDomain={"linh-vuc"} data={data} />
            </Layout >
        </>
    )
}

export default LinhVuc
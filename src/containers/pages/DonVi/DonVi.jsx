import { Col, Flex, Layout, Row, Typography } from 'antd';
import { useState } from 'react';
import './donVi.scss';
import { AppButton, AppInput } from '~/components/common';
import { SearchOutlined } from '@ant-design/icons';
import DanhSachDuLieu from '~/components/danhSachDuLieu/danhSachDuLieu';

function DonVi() {
    const [tinhThanhCount, setTinhThanhCount] = useState("64");
    const [boBanCount, setBannedCount] = useState("30")
    const locations = [
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
    ];

    return (
        <>
            <Layout className='search_component' >
                <Row justify={"space-between"} align={"middle"}>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} hidden></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} >
                        <Flex justify={"center"} align={"middle"}>
                            <AppInput type="text" placeholder={"Nhập từ khoá để tìm kiếm"} className={"search_form"} />
                            <AppButton type="primary" className={"submit_search"} icon={<SearchOutlined />} title={"Tìm kiếm"} />
                            {/* <Search placeholder="input search text" allowClear enterButton /> */}
                        </Flex>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} hidden></Col>
                </Row>
            </Layout >
            <Layout className='container'>
                <Row gutter={[16, 16]}  >
                    <p className='title'>
                        <span className='counting'>{tinhThanhCount}</span> tỉnh thành phố, <span className='counting'>{boBanCount}</span> bộ ban ngành, cơ quan ngang bộ.
                    </p>
                </Row>


                {/* <Card className='card'>
                    <List
                        itemLayout="vertical"
                        grid={{ gutter: 14, column: 8 }}
                        split
                        dataSource={locations}
                        renderItem={item => (
                            <List.Item style={{ margin: 0 }} className='card_item'>
                                <List.Item.Meta
                                    avatar={<FolderOutlined style={{ fontSize: '24px', color: '#08c' }} />}
                                    title={<a href="https://ant.design" className='card_title'>{item.name}</a>}
                                    style={{ margin: 0 }}
                                />
                                <Text>{item.count} bộ dữ liệu.</Text>
                            </List.Item>
                        )}
                    />
                </Card> */}

                <DanhSachDuLieu data={locations} />




            </Layout >

        </>
    )
}

export default DonVi
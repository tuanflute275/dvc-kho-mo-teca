import { Col, Flex, Layout, Row, Typography } from 'antd';
import { useState } from 'react';
import './donVi.scss';
import { AppButton, AppInput } from '~/components/common';
import { SearchOutlined } from '@ant-design/icons';

function DonVi() {
    const [tinhThanhCount, setTinhThanhCount] = useState("64");
    const [boBanCount, setBannedCount] = useState("30")
    const locations = [
        { name: 'Hà nội', count: 1500 },
        { name: 'Hồ Chí Minh', count: 1500 },
        { name: 'Đà Nẵng', count: 1500 },
        { name: 'Hoà Bình', count: 1500 },
        { name: 'Nam Định', count: 1500 },
        { name: 'Nha Trang', count: 1500 },
        { name: 'Đà Lạt', count: 1500 },
        { name: 'Lâm Đồng', count: 1500 },
    ];

    return (
        <>
            <Layout className='search_component' >
                <Row justify={"space-between"} align={"middle"}>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={2} hidden></Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={2} >
                        <Flex justify={"center"} align={"middle"}>
                            <AppInput type="text" placeholder={"Nhập từ khoá để tìm kiếm"} className={"search_form"} />
                            <AppButton type="primary" className={"submit_search"} icon={<SearchOutlined />} title={"Tìm kiếm"} />
                            {/* <Search placeholder="input search text" allowClear enterButton /> */}
                        </Flex>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={2} hidden></Col>
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




            </Layout >

        </>
    )
}

export default DonVi
import { Col, Layout, Menu, Row } from 'antd';
import './duLieu.scss';


const DuLieu = () => {
    return (
        <Layout className='container' style={{ padding: 0 }}>
            <Row gutter={[16, 16]} >
                <Col span={6}>
                    <Menu mode="inline" className='sidebar' defaultOpenKeys={["donvi", "linhvuc", "dinhdang"]}>
                        {/* Đơn vị */}
                        <Menu.SubMenu key="donvi" title="Đơn vị" className='parent_menu_item'>
                            <Menu.SubMenu key="hanoi" title="Hà Nội" className='sub_menu_item'>
                                <Menu.Item key="sct" className='sub_menu_item'>Sở công thương</Menu.Item>
                                <Menu.Item key="sdl" className='sub_menu_item'>Sở du lịch</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item key="hcm" className='sub_menu_item' >Hồ Chí Minh</Menu.Item>
                            <Menu.Item key="hagiang" className='sub_menu_item'>Hà Giang</Menu.Item>
                        </Menu.SubMenu>

                        {/* Lĩnh vực */}
                        <Menu.SubMenu key="linhvuc" title="Lĩnh vực" className='parent_menu_item'>
                            <Menu.Item key="yte" className='sub_menu_item'>Y tế</Menu.Item>
                            <Menu.Item key="giaoduc" className='sub_menu_item'>Giáo dục</Menu.Item>
                            <Menu.Item key="moitruong" className='sub_menu_item'>Môi trường</Menu.Item>
                        </Menu.SubMenu>

                        {/* Định dạng */}
                        <Menu.SubMenu key="dinhdang" title="Định dạng" className='parent_menu_item'>
                            <Menu.Item key="pdf" className='sub_menu_item'>PDF</Menu.Item>
                            <Menu.Item key="excel" className='sub_menu_item'>Excel</Menu.Item>
                            <Menu.Item key="word" className='sub_menu_item'>Word</Menu.Item>
                            <Menu.Item key="csv" className='sub_menu_item'>Csv</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Col>
                <Col span={18}>
                    <p>Col 2</p>

                </Col>
            </Row>
        </Layout>
    );
};

export default DuLieu;

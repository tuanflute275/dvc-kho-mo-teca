import { Col, Layout, Menu, Row } from 'antd';

import classNames from 'classnames/bind';
import ListData from '~/components/du-lieu/du-lieu-component';
import duLieuStyle from './DuLieu.module.scss';
const cx = classNames.bind(duLieuStyle);

//sidebar nhiều cấp
function getItem(className, label, key, children, number) {
    return {
        className,
        key,
        children,
        label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {label}
                {number && (
                    <span className={cx('number')} style={{ marginLeft: '8px' }}>
                        {number}
                    </span>
                )}
            </div>
        ),
    };
}

//list menu item
const items = [
    getItem(cx('parent_menu_item'), 'Đơn vị', 'donvi', [
        getItem(
            cx('sub_menu_items'),
            'Hà Nội',
            'hanoi',
            [
                getItem(cx('sub_menu_item'), 'Sở công thương', 'sct', '', 3),
                getItem(cx('sub_menu_item'), 'Sở du lịch', 'sdl'),
            ],
            1000,
        ),
        getItem(
            cx('sub_menu_items'),
            'Hồ Chí Minh',
            'hcm',
            [getItem(cx('sub_menu_item'), 'Sở công thương', 'sct'), getItem(cx('sub_menu_item'), 'Sở du lịch', 'sdl')],
            1,
        ),
        getItem(cx('sub_menu_items'), 'Hà Giang', 'hagiang', []),
    ]),
    getItem(cx('parent_menu_item'), 'Lĩnh vực', 'linhvuc', [
        getItem(cx('sub_menu_items'), 'Y tế', 'yte', []),
        getItem(cx('sub_menu_items'), 'Giáo dục', 'giaoduc', []),
        getItem(cx('sub_menu_items'), 'Môi trường', 'moitruong', []),
    ]),
    getItem(cx('parent_menu_item'), 'Định dạng', 'dinhdang', [
        getItem(cx('sub_menu_items'), 'PDF', 'pdf', []),
        getItem(cx('sub_menu_items'), 'Excel', 'excel', []),
        getItem(cx('sub_menu_items'), 'Word', 'word', []),
        getItem(cx('sub_menu_items'), 'Csv', 'csv', []),
    ]),
];

// hàm mở key để hiển thị tất cả menu con
const getAllSubmenuKeys = (items) => {
    let keys = [];
    items.forEach((item) => {
        keys.push(item.key); // Thêm key của menu cha
        if (item.children) {
            item.children.forEach((subItem) => {
                keys.push(subItem.key); // Thêm key của submenu
                if (subItem.children) {
                    subItem.children.forEach((subSubItem) => {
                        keys.push(subSubItem.key); // Thêm key của submenu con
                    });
                }
            });
        }
    });
    return keys;
};
//end Sidebar nhiều cấp

const data = [1, 2, 3, 4, 5];

const DuLieu = () => {
    const openKeys = getAllSubmenuKeys(items);
    return (
        <Layout className={cx('container')}>
            <Row gutter={[16, 16]}>
                <Col span={6} className={cx('sidebar')}>
                    <Menu defaultOpenKeys={openKeys} mode="inline" items={items} />
                </Col>
                <Col span={18} className={cx('main')}>
                    <div className={cx('link')}>
                        <a>Trang chủ </a> <a> Dữ liệu tìm kiếm </a>
                    </div>
                    <div className={cx('title')}>
                        <span>500</span> bộ dữ liệu được tìm thấy
                    </div>
                    <div className={cx('list')}>
                        {data.map((item) => (
                            <ListData key={item} data={item} />
                        ))}
                    </div>
                    {/* <div className={cx('pagination')}>
                        <div className="page-none"></div>
                        <div className="page-center">
                            <Button icon={<ArrowLeftOutlined />} className={cx('arrow-left')}></Button>
                            <Button className={cx('next')}>Trang tiếp</Button>
                        </div>
                        <div className={cx('page')}>
                            Trang <input type="number" min={1} />
                            <span>Của 15</span>
                        </div>
                    </div> */}
                </Col>
            </Row>
        </Layout>
    );
};

export default DuLieu;

import { EyeFilled } from '@ant-design/icons';
import classNames from 'classnames/bind';
import duLieuComponentStyle from './du-lieu-component.module.scss';

const cx = classNames.bind(duLieuComponentStyle);

const ListData = (data) => {
    return (
        <div className={cx('item')}>
            <label>
                <b>Danh sách các siêu thị trên địa bàn thành phố năm 2024</b>
                <span>
                    <EyeFilled style={{ marginRight: '5px', display: 'inline' }} />
                    2000 lượt xem
                </span>
            </label>
            <p className={cx('content')}>
                100% các xã, phường, thị trấn hiện chưa có chợ những có nhu cầu phát triển chợ được đưa vào Danh mục
                mạng lưới chợ trên địa bàn Thành phố
            </p>
            <div className={cx('date')}>
                <b>Ngày cập nhật</b>: 02/01/2025 |
                <span className={cx('don-vi')}>
                    <b> Đơn vị</b>: Sở công thương
                </span>
            </div>
            <div className={cx('action')}>
                <button className={cx('button')} style={{ backgroundColor: 'rgb(233 121 11)' }}>
                    PDF
                </button>
                <button className={cx('button')} style={{ backgroundColor: 'rgb(0, 100, 0)' }}>
                    Excel
                </button>
                <button className={cx('button')} style={{ backgroundColor: 'rgb(53 53 213)' }}>
                    Word
                </button>
                <button className={cx('button')} style={{ backgroundColor: 'rgb(157 157 21 / 88%)' }}>
                    Csw
                </button>
            </div>
        </div>
    );
};

export default ListData;
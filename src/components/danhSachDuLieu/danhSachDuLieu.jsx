import { Card, Divider } from "antd";
import React from "react";
import "./danhSachDuLieu.scss";
import { FolderOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const ROW_SIZE = 8; // Số danh mục trên mỗi hàng

const DanhSachDuLieu = ({ data }) => {
    // Chia danh sách thành các hàng
    const rows = [];
    for (let i = 0; i < data.length; i += ROW_SIZE) {
        rows.push(data.slice(i, i + ROW_SIZE));
    }

    return (
        <div className="item-container">
            {rows.map((row, rowIndex) => (
                <Card className="item-row-card" key={rowIndex} bordered>
                    <div className="item-row">
                        {row.map((item, index) => (
                            <React.Fragment key={index}>
                                <Link to={`/item/${item.slug}`} className="item-link">
                                    <div className="item">
                                        <div className="item-header">
                                            <FolderOutlined className="icon" />
                                            <span className="item-title">{item.title}</span>
                                        </div>
                                        <p><span className="item-count">{item.count}</span> Bộ dữ liệu</p>
                                    </div>
                                </Link>
                                {index !== row.length - 1 && <Divider type="vertical" className="item-divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default DanhSachDuLieu;
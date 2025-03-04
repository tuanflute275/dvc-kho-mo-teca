import { ArrowLeftOutlined, FolderOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Empty, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslate } from "~/context/LanguageContext";
import { compareValues } from "~/utils/helper";
import { AppButton, AppInput } from "../common";
import "./danhSachDuLieu.scss";

const MAX_ITEMS_PER_PAGE = 40; // Số lượng bản ghi tối đa trên mỗi trang
const ROW_SIZE = 8; // Số danh mục trên mỗi hàng

const DanhSachDuLieu = ({ subDomain, data }) => {
    const { t } = useTranslate();
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [displayData, setDisplayData] = useState([]);

    // Tính toán tổng số trang và dữ liệu hiển thị khi data thay đổi
    useEffect(() => {
        if (!data || data.length === 0) {
            return;
        }

        // Tính tổng số trang
        const totalPages = Math.ceil(data.length / MAX_ITEMS_PER_PAGE);
        setTotalPage(totalPages);

        // Cập nhật lại pageNumber nếu vượt quá totalPage
        if (pageNumber > totalPages) {
            setPageNumber(1);
        }

        // Lấy dữ liệu cho trang hiện tại
        updateDisplayData(pageNumber);
    }, [data, pageNumber]);

    // Hàm cập nhật dữ liệu hiển thị theo trang
    const updateDisplayData = (page) => {
        const startIndex = (page - 1) * MAX_ITEMS_PER_PAGE;
        const endIndex = Math.min(startIndex + MAX_ITEMS_PER_PAGE, data.length);
        setDisplayData(data.slice(startIndex, endIndex));
    };

    // Xử lý khi người dùng nhấn nút Next
    const handleNextPage = () => {
        if (pageNumber < totalPage) {
            setPageNumber(pageNumber + 1);
        }
    };

    // Xử lý khi người dùng nhấn nút Previous
    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    // Xử lý khi người dùng nhập số trang trực tiếp
    const handlePageInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0 && value <= totalPage) {
            setPageNumber(value);
        }
    };

    // Chia danh sách trang hiện tại thành các hàng
    const rows = [];
    for (let i = 0; i < displayData.length; i += ROW_SIZE) {
        rows.push(displayData.slice(i, i + ROW_SIZE));
    }

    if (compareValues(data.length, 0)) {
        return (
            <>
                <div className="item-container">
                    <div className="no-data">{t('dsDuLieu.khongCoDuLieu.noiDung')}</div>
                    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={t('dsDuLieu.khongCoDuLieu.tieuDe')} />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="item-container">
                {rows.map((row, rowIndex) => (
                    <Card className="item-row-card" key={rowIndex} style={{ padding: 0 }} variant>
                        <div className="item-row">
                            {row.map((item, index) => (
                                <div className="item-wrapper" key={index}>
                                    <Link to={`/${subDomain}/${item.slug}`} className="item-link">
                                        <div className="item">
                                            <div className="item-header">
                                                <FolderOutlined className="icon" />
                                                <span className="item-title">{item.title}</span>
                                            </div>
                                            <p><span className="item-count">{item.count}</span> {t('dsDuLieu.boDuLieu')}</p>
                                        </div>
                                    </Link>
                                    {index !== row.length - 1 && <Divider type="vertical" className="item-divider" />}
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
            <div className="pagination">
                <Row align={"end"} justify={"space-between"} gutter={[16, 16]}>
                    <Col></Col>
                    <Col>
                        <Row className="navigate_button" justify={"space-between"} gutter={[16, 0]}>
                            <Col>
                                <AppButton
                                    className="prev_button"
                                    icon={<ArrowLeftOutlined />}
                                    onClick={handlePrevPage}
                                    disabled={pageNumber <= 1}
                                />
                            </Col>
                            <Col>
                                <AppButton
                                    className="next_button"
                                    text={t('dsDuLieu.trangTiep')}
                                    onClick={handleNextPage}
                                    disabled={pageNumber >= totalPage}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row gutter={[16, 0]} align={"middle"} justify={"space-between"}>
                            <p>{t('dsDuLieu.Trang')}</p>
                            <AppInput
                                className={"page_number"}
                                value={pageNumber}
                                type={"number"}
                                style={{ width: "50px" }}
                                onChange={handlePageInputChange}
                                min={1}
                                max={totalPage}
                            />
                            <p>{t('dsDuLieu.Cua')} {totalPage}</p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default DanhSachDuLieu;
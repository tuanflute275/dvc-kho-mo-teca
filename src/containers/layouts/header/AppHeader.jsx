import React from 'react';
import './appHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearData, selectUserData } from '~/redux/reducers/user';
import { Header } from 'antd/es/layout/layout';
import { AppButton } from '~/components/common';
import { Col, Row } from 'antd';

const AppHeader = () => {
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = async () => {
        dispatch(clearData());

        // const result = await Swal.fire({
        //   title: "Xác nhận",
        //   text: "Bạn có chắc chắn muốn thoát khỏi tài khoản?",
        //   icon: "warning",
        //   showCancelButton: true,
        //   confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        //   cancelButtonText: "Hủy",
        //   confirmButtonText: "Thoát!",
        // });

        if (true) {
            // Swal.fire({
            //   position: "top-end",
            //   icon: "success",
            //   title: "Logout Success",
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
            navigate('/login');
        }
    };
    return (
        <Header className="header">
            <Row justify="space-between">
                <Col span={6}>
                    <p>Header1 111{userData.user.fullname ?? 'okeee'}</p>
                </Col>

                <Col span={6}>
                    <AppButton type="primary" text="Đăng xuất" onClick={() => handleLogout()} />
                </Col>
            </Row>
        </Header>
    );
};

export default AppHeader;

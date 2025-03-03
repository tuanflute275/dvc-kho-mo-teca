import React from "react";
import "./appHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearData, selectUserData } from "~/redux/reducers/user";
import { Header } from "antd/es/layout/layout";
import { AppButton } from "~/components/common";
import { Avatar, Col, Image, Row } from "antd";
import banner from "~/assets/Quoc_Huy_Viet_Nam_Chuan.png";

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
      navigate("/login");
    }
  };
  return (
    <Header className="header">
      <Row justify="space-between">
        <Col span={6} flex={1}>
          {/* <p>Header1 111{userData.user.fullname ?? "okeee"}</p> */}
          <Avatar
            src={banner}
            className="header_logo"
          />
        </Col>

        <Col span={6}>
          <AppButton
            type="default"
            text="Đăng Nhập"
            onClick={() => handleLogout()}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;

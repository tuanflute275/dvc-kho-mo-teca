import React, { useEffect, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import * as AuthServices from "~/services/AuthService";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "~/redux/reducers/user";
import { Button, Checkbox, Flex, Form, Input, Modal, Typography } from "antd";
import { setPermissions } from "~/redux/reducers/permission";
import { compareValues } from "~/utils/helper";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log("Success:", values);

    if (compareValues(values.username, "admin") && compareValues(values.password, "Admin@Teca2025")) {

      const dataUser = {
        id: 1,
        username: "admin",
        fullname: "TECAPRO",
        email: "admin-teca@gmail.com",
      };

      dispatch(setUser(dataUser));
      const defaultPermissions = ["submit_data", "edit_data"];
      // localStorage.setItem("permissions", JSON.stringify(defaultPermissions));
      dispatch(setPermissions(defaultPermissions));
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

    return (
        <>
            {/* <Title level={2} style={{ textAlign: "center" }}>Login Form</Title> */}
            <Flex style={{ height: '100vh' }} justify="center" align="center">
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 400, width: '100%' }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        id=""
                        rules={[
                            { required: true, message: 'Tên đăng nhập không được bỏ trống!' },
                            { min: 3, message: 'Tên đăng nhập phải có ít nhất 3 ký tự!' },
                            {
                                max: 20,
                                message: 'Tên đăng nhập không được vượt quá 20 ký tự!',
                            },
                            {
                                pattern: /^[A-Za-zÀ-Ỹà-ỹ\\s'ŏŭĕơ̆ư̆ĭô̆ê̆â̆ƀčñbŎŬĔƠ̆Ư̆ĬÔ̆Ê̆Â̆ɃČÑ]*$/,
                                message: 'Tên đăng nhập không được chưa kí tự đặc biệt!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Mật khẩu không được bỏ trống!' },
                            { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự!' },
                            { max: 32, message: 'Mật khẩu không được quá 32 ký tự!' },
                            {
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                message: 'Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </>
    );
}

export default Login;

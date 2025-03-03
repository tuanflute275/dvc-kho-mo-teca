import React from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '~/redux/reducers/user';
import { Button, Checkbox, Flex, Form, Input } from 'antd';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        console.log('Success:', values);

        if (values.username === 'admin' && values.password === 'Admin@Teca2025') {
            const dataUser = {
                id: 1,
                username: 'admin',
                fullname: 'TECAPRO',
                email: 'admin-teca@gmail.com',
            };
            dispatch(setUser(dataUser));
            const defaultPermissions = ['submit_data', 'edit_data'];
            localStorage.setItem('permissions', JSON.stringify(defaultPermissions));
            navigate('/');
        }

        // const [result, error] = await AuthServices.login(values);
        // if (result) {
        //   console.log(result);
        //   dispatch(setUser(result.data.user));
        //   dispatch(setToken(result.data.jwtToken));

        //   let role = result.data.user.role[0].roleName;
        //   if (role === "Admin") {
        //     navigate("/admin");
        //   } else if (role === "User") {
        //     navigate("/");
        //   } else {
        //     navigate("/");
        //   }

        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Successfully",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        // }
        // if (error) {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "error",
        //     title: "Failed",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        //   console.log(error);
        // }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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

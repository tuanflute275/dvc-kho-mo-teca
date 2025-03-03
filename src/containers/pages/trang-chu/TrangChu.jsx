/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import useNotifyHelper from '~/hooks/useNotifyHelper';
import { useTranslate } from '~/context/LanguageContext';
import { AppButton, AppInput } from '~/components/common';

import './trangChu.scss';
import { helper } from '~/utils';
import { exportData } from '~/utils';
import { constants } from '~/utils';
import { usePrevious, usePushQueryString, useQueryString } from '~/hooks';

const TrangChu = () => {
    // call API default value
    const initData = {
        name: '',
        email: '',
        password: '',
        status: 'active',
    };

    //const navigate = useNavigate();
    const [postData, setPostData] = useState(initData);
    const [errors, setErrors] = useState({});
    const { t, language, setLanguage } = useTranslate();
    const [permissions, setPermissions] = useState([]);
    const { notifyHelper, notifyComponent } = useNotifyHelper();
    const pushQueryString = usePushQueryString();
    const query = useQueryString();

    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count); // Lấy giá trị trước đó của count

    const handleFilter = () => {
        pushQueryString({ name: 'testName', pageNo: 1, pageSize: 15 });
    };

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSelectChange = (value) => {
        setPostData({
            ...postData,
            status: value,
        });
        setErrors({ ...errors, status: '' });
    };

    const rules = {
        name: [{ required: true, message: t('home.TenEmpty') }],
        email: [{ required: true, message: t('home.EmailEmpty'), email: true }],
        password: [
            { required: true, message: t('home.PassEmpty') },
            { minLength: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
        ],
        status: [{ required: true, message: 'Trạng thái không được để trống!' }],
    };

    // tránh tạo lại hàm handleSubmit mỗi khi component re-render.
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const validationErrors = helper.validateFormHelper(postData, rules);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length === 0) {
                console.log('Dữ liệu hợp lệ:', postData);
                notifyHelper('success', 'Thành công!', 'Bạn đã thực hiện hành động thành công.');
            } else {
                console.log('Lỗi form invalid:', validationErrors);
            }
        },
        [postData],
    );

    useEffect(() => {
        //call API Default initData
        // console.log("=================================================");
        // let element = document.querySelector("[tenkhac]");
        // if (element) {
        //   console.log("tenkhac:", element.getAttribute("tenkhac"));
        //   console.log("data-name:", element.getAttribute("data-name"));
        // }
        // console.log("===================================================");
        // let element2 = document.querySelector("[data-email]");
        // if (element2) {
        //   console.log("data-email:", element.dataset.email);
        // }

        const storedPermissions = JSON.parse(localStorage.getItem('permissions')) || [];
        setPermissions(storedPermissions);
    }, []);

    const hasPermission = (requiredPermission) => permissions.includes(requiredPermission);

    const handleDownload = (type) => {
        console.log(1);
        const data = [
            { id: '1', name: 'category 1', status: 'Còn' },
            { id: '2', name: 'category 2', status: 'Còn' },
            { id: '3', name: 'category 3', status: 'Hết' },
            { id: '4', name: 'category 4', status: 'Hết' },
            { id: '5', name: 'category 5', status: 'Còn' },
        ];

        const option = {
            //headers: ["STT", "Tên", "Trạng Thái"],
            // headerColumn: {
            //   STT: { width: 10, alignment: { horizontal: "left" } }, // Độ rộng và căn trái cho cột STT
            //   Tên: { width: 20, alignment: { horizontal: "center" } }, // Độ rộng và căn giữa cho cột Tên
            //   "Trạng Thái": { width: 15, alignment: { horizontal: "right" } }, // Độ rộng và căn phải cho cột Trạng Thái
            // },
            headerStyle: {
                fontColor: 'FFFFFFFF',
                backgroundColor: '63b039',
                bold: true,
                alignment: { vertical: 'middle', horizontal: 'center' },
            },
        };
        if (type === 1) {
            exportData.exportDataToFile(data, constants.TYPE_JSON);
        }
        if (type === 2) {
            exportData.exportDataToFile(data, constants.TYPE_XML);
        }
        if (type === 3) {
            exportData.exportDataToFile(data, constants.TYPE_CSV);
        }
        if (type === 4) {
            exportData.exportDataToFile(data, constants.TYPE_XLSX, 'dataok', option);
        }
    };

    return (
        <>
            {notifyComponent}
            <div style={{ width: '100px', margin: '10px' }}>
                <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                    <option value="vi">VI-Tiếng Việt</option>
                    <option value="en">EN-English</option>
                    <option value="zh">ZH-中文</option>
                </select>
            </div>

            <div style={{margin:"10px 0"}}>
                <button onClick={() => handleDownload(1)}>download JSON</button>
                <button onClick={() => handleDownload(2)}>download XML</button>
                <button onClick={() => handleDownload(3)}>download CSV</button>
                <button onClick={() => handleDownload(4)}>download XLSX</button>
                <button onClick={() => handleDownload(5)}>download PDF</button>
            </div>

            <div style={{margin:"20px 0"}}>
                <p>Giá trị hiện tại: {count}</p>
                <p>Giá trị trước đó: {previousCount}</p>
                <button onClick={() => setCount(count + 1)}>Tăng</button>
            </div>

            <>
                <div></div>
                <button onClick={handleFilter}>Lọc dữ liệu</button>
                <p>Current Query Params:</p>
                <pre>{JSON.stringify(query, null, 2)}</pre>
            </>

            <form onSubmit={handleSubmit} style={{ width: 400, margin: 'auto' }}>
                <h1>{t('app.Welcome')}</h1>
                <h2>{t('home.TitleForm')}</h2>
                <AppInput
                    name="name"
                    placeholder={t('home.PlNhapTen')}
                    value={postData.name}
                    onChange={handleChangeValue}
                    error={errors.name}
                    data-name="data name demo"
                />

                <AppInput
                    name="email"
                    placeholder={t('home.PlNhapEmail')}
                    value={postData.email}
                    onChange={handleChangeValue}
                    error={errors.email}
                    tenkhac="ten_khac_attribute_demo"
                    data-name="data email demo"
                    data-email="data email demo"
                />

                <AppInput
                    name="password"
                    type="password"
                    placeholder={t('home.PlNhapMK')}
                    value={postData.password}
                    onChange={handleChangeValue}
                    error={errors.password}
                />

                <AppInput
                    typeInput="select"
                    name="status"
                    placeholder="Chọn trạng thái"
                    value={postData.status}
                    onChange={handleSelectChange}
                    data={[
                        { id: 'active', label: 'Hoạt động' },
                        { id: 'inactive', label: 'Không hoạt động' },
                    ]}
                    valueType="id"
                    valueName="label"
                    error={errors.status}
                />

                <AppButton
                    text={t('home.BtnSubmit')}
                    type="primary"
                    bg="blue"
                    color="white"
                    onClick={handleSubmit}
                    style={{ marginTop: 10 }}
                    //disabled={!hasPermission("delete_data")}
                    disabled={!hasPermission('submit_data')}
                />
            </form>
        </>
    );
};

export default TrangChu;

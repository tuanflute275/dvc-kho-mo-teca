/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as userService from '~/services/UserService';
import './danhSachNguoiDung.scss';
import { usePushQueryString } from '~/hooks';

const DanhSachNguoiDung = () => {
    const [apiData, setApiData] = useState([]);
    const location = useLocation();
    const pushQueryString = usePushQueryString();
    //const query = useQueryString();

    const fetchAll = async () => {
        const request = {
            // pageSize: 15,
            // pageNo: 1,
            // name: '',
            // email: '',
        };
        const [res, err] = await userService.search(request);
        if (res) {
            setApiData(res);
            console.log(res);
        } else {
            setApiData([]);
            console.log(err);
        }
    };

    useEffect(() => {
        console.log(location.search);
        fetchAll();
    }, []);
    return (
        <>
            <h2 style={{ margin: '20px 0' }}>HTML Table</h2>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    <th>Action</th>
                </tr>
                {apiData &&
                    apiData.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                                <td>
                                    <button style={{margin: "0 10px"}}>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
            </table>
        </>
    );
};

export default DanhSachNguoiDung;

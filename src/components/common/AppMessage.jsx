import React from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';

const AppMessage = ({ type, content }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: content,
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: content,
        });
    };
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: content,
        });
    };

    if (type === 'success') {
        success();
    } else if (type === 'error') {
        error();
    } else if (type === 'warning') {
        warning();
    }

    return <>{contextHolder}</>;
};

AppMessage.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'warning']),
    content: PropTypes.string.isRequired,
};
export default AppMessage;

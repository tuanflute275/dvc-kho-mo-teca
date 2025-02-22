import React from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';

const AppMessage = ({ type }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  if (type == 'success') {
    success();
  } else if (type == 'error') {
    error();
  } else if (type == 'warning') {
    warning();
  }

  return <>{contextHolder}</>;
};

AppMessage.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
};
export default AppMessage;

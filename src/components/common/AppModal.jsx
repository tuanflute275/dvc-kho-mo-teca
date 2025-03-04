import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';

const AppModal = ({ type, name, title, width, footer, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type={type} onClick={showModal}>
                {name}
            </Button>
            <Modal
                title={title}
                open={isModalOpen}
                okText="Xác nhận"
                cancelText="Hủy"
                onOk={handleOk}
                onCancel={handleCancel}
                width={width}
                destroyOnClose
                footer={footer}
            >
                {children}
            </Modal>
        </>
    );
};

AppModal.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    footer: PropTypes.oneOfType([PropTypes.array, PropTypes.node, PropTypes.bool]),
    children: PropTypes.node,
};

export default AppModal;

import React from 'react';
import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';

const AppButton = ({ title, disabled, type, variant, bg, color, icon, text, onClick, ...rest }) => {
    return (
        <Tooltip title={title}>
            {disabled ? (
                <Button
                    type={type}
                    variant={variant}
                    style={{
                        backgroundColor: bg,
                        color: color,
                    }}
                    disabled
                >
                    {icon}
                    {text}
                </Button>
            ) : (
                <Button
                    type={type}
                    variant={variant}
                    style={{
                        backgroundColor: bg,
                        color: color,
                    }}
                    onClick={onClick}
                    {...rest}
                >
                    {icon}
                    {text}
                </Button>
            )}
        </Tooltip>
    );
};

AppButton.propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    variant: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default AppButton;

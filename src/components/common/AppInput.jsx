import React from 'react';
import { Input, Select } from 'antd';
import PropTypes from 'prop-types';

const AppInput = ({
  className,
  typeInput,
  error,
  disabled,
  multiple,
  selectSearch,
  data,
  valueType,
  valueName,
  value,
  placeholder,
  name,
  onChange,
  size,
  type,
  suffix,
  ...restProps
}) => {
  const showError = error ? { color: 'red' } : {};

  if (typeInput === 'select') {
    return (
      <>
        <Select
          name={name}
          className={className}
          placeholder={placeholder}
          mode={multiple ? 'multiple' : undefined}
          showSearch={selectSearch}
          optionFilterProp="label"
          value={value}
          allowClear
          disabled={disabled}
          onChange={onChange}
          style={{ width: '100%', ...showError }}
          suffixIcon={suffix}
          {...restProps}
        >
          {data?.map((item) => (
            <Select.Option key={item[valueType]} value={item[valueType]} label={item[valueName]}>
              {item[valueName]}
            </Select.Option>
          ))}
        </Select>
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </>
    );
  }

  return (
    <>
      <Input
        name={name}
        className={className}
        id={name}
        value={value}
        placeholder={placeholder}
        size={size || ''}
        type={type || 'text'}
        onChange={onChange}
        disabled={disabled}
        style={showError}
        suffix={suffix}
        {...restProps}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  );
};

AppInput.propTypes = {
  typeInput: PropTypes.oneOf(['text', 'select']),
  error: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  selectSearch: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    }),
  ),
  valueType: PropTypes.string,
  valueName: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  type: PropTypes.string,
  suffix: PropTypes.node,
};
export default AppInput;

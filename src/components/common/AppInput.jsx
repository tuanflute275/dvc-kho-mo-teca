import React from "react";
import { Input, Select } from "antd";

const AppInput = ({
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
  ...restProps
}) => {
  const showError = error ? { color: "red" } : {};

  if (typeInput === "select") {
    return (
      <>
        <Select
          name={name}
          placeholder={placeholder}
          mode={multiple ? "multiple" : undefined}
          showSearch={selectSearch}
          optionFilterProp="label"
          value={value}
          allowClear
          disabled={disabled}
          onChange={onChange}
          style={{ width: "100%", ...showError }}
          {...restProps}
        >
          {data?.map((item) => (
            <Select.Option
              key={item[valueType]}
              value={item[valueType]}
              label={item[valueName]}
            >
              {item[valueName]}
            </Select.Option>
          ))}
        </Select>
        {error && <span style={{ color: "red" }}>{error}</span>}
      </>
    );
  }

  return (
    <>
      <Input
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        size={size || ""}
        type={type || "text"}
        onChange={onChange}
        disabled={disabled}
        style={showError}
        {...restProps}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default AppInput;

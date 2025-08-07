import React from "react";

const InputBar = ({ value, onChange, placeholder, inputRef }) => {
  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: "10px", marginBottom: "10px", width: "70%" }}
    />
  );
};

export default InputBar;
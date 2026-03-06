import React from 'react';
import '../styles/global.css';

const InputField = ({ label, type = 'text', value, onChange, name, required = false, placeholder = '' }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label}{required && <span className="required">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="popx-input"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;

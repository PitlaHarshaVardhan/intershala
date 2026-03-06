import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes' // default to yes per design
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setForm((prev) => ({ ...prev, agency: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.email || !form.password) {
      setError('Email and password required');
      return;
    }
    localStorage.setItem('popxUser', JSON.stringify(form));
    navigate('/settings');
  };

  return (
    <div className="screen-container register-screen">
      <h2>Create your<br/> PopX account</h2>
      <form onSubmit={handleSubmit} className="form">
        <InputField
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <InputField
          label="Company Name"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
        <div className="input-group radio-group-container">
          <label className="radio-label">Are you an Agency?<span className="required">*</span></label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === 'yes'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        {error && <p className="error-text">{error}</p>}
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // if already logged in, redirect
    const user = JSON.parse(localStorage.getItem('popxUser'));
    if (user) {
      navigate('/settings');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('popxUser'));
    if (user && user.email === form.email && user.password === form.password) {
      navigate('/settings');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="screen-container login-screen">
      <h2>Signin to your<br/> PopX account</h2>
      <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
      <form onSubmit={handleSubmit} className="form">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email address"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />
        {error && <p className="error-text">{error}</p>}
        <Button type="submit" disabled={!form.email || !form.password}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

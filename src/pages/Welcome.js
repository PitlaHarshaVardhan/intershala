import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container welcome-screen">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="button-group">
        <Button onClick={() => navigate('/register')}>Create Account</Button>
        <Button onClick={() => navigate('/login')} className="secondary">
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Welcome;

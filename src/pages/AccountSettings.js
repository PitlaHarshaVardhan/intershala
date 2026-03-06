import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';

const AccountSettings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const fileInput = useRef(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('popxUser'));
    if (!stored) {
      navigate('/login');
    } else {
      // load photo if stored separately
      const photo = localStorage.getItem('popxPhoto');
      setUser({ ...stored, photo });
    }
  }, [navigate]);

  const handlePhotoClick = () => {
    if (fileInput.current) fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      // save photo to localStorage for persistence
      localStorage.setItem('popxPhoto', dataUrl);
      setUser((prev) => ({ ...prev, photo: dataUrl }));
    };
    reader.readAsDataURL(file);
  };

  if (!user) return null;

  return (
    <div className="screen-container account-screen">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-card">
        <div className="header-row">
          <div className="avatar-container">
            {user.photo ? (
              <img src={user.photo} alt="avatar" className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">👤</div>
            )}
<div className="camera-icon" onClick={handlePhotoClick}><FaCamera size={30} color="#fff" /></div>
            <input
              type="file"
              accept="image/*"
              ref={fileInput}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
          <div className="details">
            <p><strong>{user.fullName}</strong></p>
            <p>{user.email}</p>
          </div>
        </div>
        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;

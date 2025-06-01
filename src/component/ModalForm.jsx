import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const ModalForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // ✅ Store username and email using correct keys for Quizzes.js
    localStorage.setItem('username', formData.username);
    localStorage.setItem('email', formData.email);

    console.log('Form submitted:', formData);

    setError('');
    onClose();
    navigate('/quizzes');
  };

  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center z-3">
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: '#0a1d37',
          color: 'white',
          width: '100%',
          maxWidth: '450px',
        }}
      >
        <h4 className="mb-4 text-center border-bottom pb-2">🎯 Start Quiz</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark text-white">
              <FaUser />
            </span>
            <input
              type="text"
              name="username"
              className="form-control bg-dark text-white border-0"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark text-white">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-white border-0"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-dark text-white">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              className="form-control bg-dark text-white border-0"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-light w-50 me-2">
              Start
            </button>
            <button type="button" className="btn btn-outline-light w-50" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;

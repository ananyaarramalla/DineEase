import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting login with', { email, phone });
      const response = await axios.post('http://localhost:4000/api/login/send', { email, phone });
      console.log('Response:', response.data);
      if (response.data.success) {
        navigate('/reservations', { state: { reservations: response.data.reservations } });
      } else {
        setError('Invalid email or phone number');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="containers">
      <div className="form-containers">
        <h2 className='loginhead'>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="loginbtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

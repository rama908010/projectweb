import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      onLogin();
      history.push('/');
    } else {
      alert('Email dan Password harus diisi!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url("/images/f1.jpeg")'  }}>
      <form
        onSubmit={handleLogin}
        style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px', backgroundColor: 'white' }}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

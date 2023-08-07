import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

const AuthenticationComponent = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  //use for linking other components
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.login(username, password);
      setUser(user);
      setError('');
      props.logIn(true);
      props.setNewUser(user);
      navigate('/welcome');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
      setUsername('');
      setPassword('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    // You can check the user's login status here and update the state accordingly.
    // For simplicity, we'll just assume the user is not logged in initially.
    setUser(null);
  }, []);
  return (
    <div style={{ marginTop: "12%" , marginLeft: "39%"}}>
    <div style={{ marginLeft: "4.5%", marginTop: "1%", width: "30%" }}>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        
        <form onSubmit={handleLogin}>
          <h3 style={{ marginLeft: "4.5%", marginBottom: "2%", textAlign: "center" }}>Bond Tracker</h3>
          <h5 style={{ marginLeft: "4.5%", marginTop: "1%", textAlign: "center" }} class="text-body-secondary">Please Enter You Login Credentials</h5>
          <div class="form-group">
            <label htmlFor="username" class="form-label mt-4">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              class="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label htmlFor="password" class="form-label mt-4">Password:</label>
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary" style={{ marginLeft: "35%", marginTop: "5%", textAlign: "center", marginBottom: "2%"}}>Login</button>
          <span style={{ marginLeft: "35%", marginTop: "6%", textAlign: "center"}}>
          {error && <p>{error}</p>}</span>
        </form>
      )}
    </div></div>
  );
};

export default AuthenticationComponent;
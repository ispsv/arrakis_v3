import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';

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
      navigate('/allbonds');
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
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default AuthenticationComponent;
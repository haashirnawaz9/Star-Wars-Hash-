import '../App.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../store';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginbutton = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })  // Changed to HTTP and correct port
    .then(res => {
      if (res.data.status) {
        localStorage.setItem('token', res.data.token);
        console.log('Token stored:', res.data.token);
        dispatch(login());
        navigate('/movies');
      } else {
        alert("Wrong Username/Password");
      }
    }).catch(err => console.log(err));
  };

  return (
    <div className="register">
      <h1 className="label">Login</h1>
      <form onSubmit={loginbutton} className="loginform">
        <label className="userlabel">Username: </label>
        <input 
          className="input"
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password: </label>
        <input 
          className="input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
        <h4>Don't have an account? <Link to='/register'>Register</Link></h4>
      </form>
    </div>
  );
}

export default Login;

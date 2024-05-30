import '../App.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from '../store';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerbutton = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, username, password })  // Changed to HTTP and correct port
    .then(res => {
      if (res.data.status) {
        localStorage.setItem('token', res.data.token);
        alert("Registration Completed");
        dispatch(login());
        navigate('/movies');
      } else {
        alert('Username already taken');
      }
    }).catch(err => console.log(err));
  };

  return (
    <div className="register">
      <h1 className="label">Register</h1>
      <form onSubmit={registerbutton} className="form">
        <label className="userlabel">Name: </label>
        <input 
          className="input"
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

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
        <h4>Have an account? <Link to='/login'>Login</Link></h4>
      </form>
    </div>
  );
}

export default Register;

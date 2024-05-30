import '../App.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem('token')
  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="navbar">
      <h1 className="title">Star Wars Hash</h1>
      <div>
        { isUserSignedIn ? (
          <>
            <Link className="links" to='/movies'>Movies </Link>
            <button className="navbutton" onClick={signout}>SignOut</button>
          </>
        ) : (
          <>
            <Link className="links" to='/'>Home </Link>
            <Link className='links' to='/login'>Login</Link>
            <Link className='links' to='/register'>Register</Link>
          </>
        )
        }
      </div>
    </div>
  );
}

export default Navbar;

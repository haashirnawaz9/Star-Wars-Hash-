import React from "react";
import './home.css';
import vaderImage from '../images/vader.jpeg';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const homebutton = () => {
    navigate('/login')
  }
  return (
    <div className="home">
      <img src={vaderImage} alt='' className="image" />

      <h1 className="welcome">Welcome to Star Wars Hash!</h1>
      <p className="description">Star Wars Hash is a website where you can watch 
      Star Wars movies from the Prequels to the Original Trilogy (Episodes 1-6) for free! 
      Just login/register to continue.</p>

      <button onClick={homebutton} className="homebutton">Login/Register</button>
      
      <footer className="footer">
        <p className="footerp">&copy; 2024 Haashir Nawaz | Star Wars Hash</p>
      </footer>
    </div>
  );
}

export default Home;

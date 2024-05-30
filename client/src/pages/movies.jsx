import '../App.css';
import React from "react";
import Movie from '../components/movie';
import episode1 from '../images/episode1.jpeg'
import episode2 from '../images/episode2.jpeg'
import episode3 from '../images/episode3.jpeg'
import episode4 from '../images/episode4.jpeg'
import episode5 from '../images/episode5.jpeg'
import episode6 from '../images/episode6.jpeg'
import { useNavigate } from 'react-router-dom';

const Movies = (props) => {
  const navigate = useNavigate()
  const movie1 = () => {
    navigate('/episode-1')
  }
  const movie2 = () => {
    navigate('/episode-2')
  }
  const movie3 = () => {
    navigate('/episode-3')
  }
  const movie4 = () => {
    navigate('/episode-4')
  }
  const movie5 = () => {
    navigate('/episode-5')
  }
  const movie6 = () => {
    navigate('/episode-6')
  }
  return (
    <div className="movies1">
      <div className='starwarsmovies'>
        <Movie src={episode1} name="The Phantom Menace" onClick={movie1}/>
        <Movie src={episode2} name="Attack of the Clones" onClick={movie2}/>
        <Movie src={episode3} name="Revenge of the Sith" onClick={movie3}/>
        <Movie src={episode4} name="A New Hope" onClick={movie4}/>
        <Movie src={episode5} name="The Empire Strikes Back" onClick={movie5}/>
        <Movie src={episode6} name="Return of the Jedi" onClick={movie6}/>
      </div>

      <div className="quote">
        <h2>May the Force Be With You!</h2>
      </div>
      <div className="t"></div>
      
      <footer className="footer">
        <p className="footerp">&copy; 2024 Haashir Nawaz | Star Wars Hash</p>
      </footer>
    </div>
  );
}

export default Movies;
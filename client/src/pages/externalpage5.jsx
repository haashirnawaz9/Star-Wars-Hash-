import React from 'react';
import '../App.css';
import episode5p from '../images/episode5.jpeg'

const ExternalPage5 = () => {
  return (
    <div className="moviepage">
      <div className="movie">
        <img className="poster1"src={episode5p} alt=""></img>
        <video className="video"controls src width="900"></video>
        <img className="poster2" src={episode5p} alt=""></img>

      </div>
      <h2>Star Wars Episode 5: The Empire Strikes Back</h2>

      <div className="not-working-link">
        <h4>If the movie is not playing, click the link below 👇</h4>
        <h4><a href="https://flixrave.to/watch/movie-star-wars-episode-5-the-empire-strikes-back-free-hd-3r8r/1-1" style={{color: 'white', textDecoration: 'underline'}}>
          Star Wars Episode 5: The Empire Strikes Back</a></h4>
      </div>

      <div className="movie1">
        <img src={episode5p}  />
        <div className="movie1-content">
          <h2>Star Wars Episode 5: The Empire Strikes Back</h2>
          <p>The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) 
            is a 1980 American epic space opera film directed by Irvin Kershner from a screenplay by Leigh Brackett 
            and Lawrence Kasdan, based on a story by George Lucas. The sequel to Star Wars (1977), it is the 
            second film in the Star Wars film series and the fifth chronological chapter of the "Skywalker Saga". 
            Set three years after the events of Star Wars, the film recounts the battle between the malevolent 
            Galactic Empire, led by the Emperor, and the Rebel Alliance, led by Princess Leia. Rebel ally Luke 
            Skywalker trains to master the Force so he can confront the Emperor's powerful disciple, Darth Vader. 
            The ensemble cast includes Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, 
            Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, and Frank Oz.
            </p>

          <div className="rating">
            <span>Rating:</span>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
            />
            10 / 10
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footerp">&copy; 2024 Haashir Nawaz | Star Wars Hash</p>
      </footer>
    </div>
  );
};

export default ExternalPage5;

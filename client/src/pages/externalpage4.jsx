import React from 'react';
import '../App.css';
import episode4p from '../images/episode4.jpeg'

const ExternalPage4 = () => {
  return (
    <div className="moviepage">
      <div className="movie">
        <img className="poster1"src={episode4p} alt=""></img>
        <video className="video"controls src width="900"></video>
        <img className="poster2" src={episode4p} alt=""></img>

      </div>
      <h2>Star Wars Episode 4: A New Hope</h2>

      <div className="not-working-link">
        <h4>If the movie is not playing, click the link below 👇</h4>
        <h4><a href="https://flixrave.to/watch/movie-star-wars-episode-iv-a-new-hope-free-hd-xrk6w/1-1" style={{color: 'white', textDecoration: 'underline'}}>
          Star Wars Episode 4: A New Hope</a></h4>
      </div>

      <div className="movie1">
        <img src={episode4p} alt="Star Wars Episode 1: The Phantom Menace" />
        <div className="movie1-content">
          <h2>Star Wars Episode 4: A New Hope</h2>
          <p>Star Wars (later retitled Star Wars: Episode IV – A New Hope) is a 1977 American epic space opera 
            film written and directed by George Lucas, produced by Lucasfilm and distributed by Twentieth Century-Fox. 
            It was the first film released in the Star Wars film series and the fourth chronological chapter of the 
            "Skywalker Saga". Set "a long time ago" in a fictional galaxy ruled by the tyrannical Galactic Empire, 
            the story follows a group of freedom fighters known as the Rebel Alliance, who aim to destroy the Empire's 
            newest weapon, the Death Star. When the Rebel leader Princess Leia is abducted by the Empire, 
            Luke Skywalker acquires stolen architectural plans of the Death Star and sets out to rescue her while 
            learning the ways of a metaphysical power known as "the Force" from the Jedi Master Obi-Wan Kenobi. 
            The cast includes Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness, 
            Anthony Daniels, Kenny Baker, Peter Mayhew, David Prowse, and James Earl Jones.
            </p>

          <div className="rating">
            <span>Rating:</span>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
            />
            8.5 / 10
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footerp">&copy; 2024 Haashir Nawaz | Star Wars Hash</p>
      </footer>
    </div>
  );
};

export default ExternalPage4;

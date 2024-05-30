import React, { useState } from 'react';
import episode1p from '../images/episode1.jpeg';

const ExternalPage = () => {
  return (
    <div className="moviepage">
      <div className="movie">
        <img className="poster1" src={episode1p} alt="Star Wars Episode 1: The Phantom Menace" />
        <video className="video" controls src="" width="900"></video>
        <img className="poster2" src={episode1p} alt="Star Wars Episode 1: The Phantom Menace" />
      </div>
      <h2>Star Wars Episode 1: The Phantom Menace</h2>

      <div className="not-working-link">
        <h4>If the movie is not playing, click the link below 👇</h4>
        <h4>
          <a href="https://flixrave.to/watch/movie-star-wars-episode-1-the-phantom-menace-free-hd-0245/1-1" style={{ color: 'white', textDecoration: 'underline' }}>
            Star Wars Episode 1: The Phantom Menace
          </a>
        </h4>
      </div>

      <div className="movie1">
        <img src={episode1p} alt="Star Wars Episode 1: The Phantom Menace" />
        <div className="movie1-content">
          <h2>Star Wars Episode 1: The Phantom Menace</h2>
          <p>Star Wars: Episode I – The Phantom Menace is a 1999 American epic 
            space opera film written and directed by George Lucas. It stars Liam Neeson, 
            Ewan McGregor, Natalie Portman, Jake Lloyd, Ahmed Best, Ian McDiarmid, 
            Anthony Daniels, Kenny Baker, Pernilla August, and Frank Oz. It is the fourth 
            film in the Star Wars film series, the first film of the prequel trilogy and the first 
            chronological chapter of the "Skywalker Saga". Set 32 years before the original trilogy 
            (13 years before the formation of the Galactic Empire), during the era of the Galactic Republic, 
            the plot follows Jedi Master Qui-Gon Jinn and his apprentice Obi-Wan Kenobi as they try to protect 
            Queen Padmé Amidala of Naboo in hopes of securing a peaceful end to an interplanetary trade dispute. 
            Joined by Anakin Skywalker—a young slave with unusually strong natural powers of the Force—they simultaneously 
            contend with the mysterious return of the Sith. The film was produced by Lucasfilm and distributed by 20th Century Fox.
            </p>

          <div className="rating">
            <span>Rating:</span>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
            />
            6.5 / 10
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footerp">&copy; 2024 Haashir Nawaz | Star Wars Hash</p>
      </footer>
    </div>
  );
};

export default ExternalPage;

// ExternalPage.js
import React from 'react';
import episode2p from '../images/episode2.jpeg'

const ExternalPage2 = () => {
  return (
    <div className="moviepage">
      <div className="movie">
        <img className="poster1"src={episode2p} alt=""></img>
        <video className="video"controls src width="900"></video>
        <img className="poster2" src={episode2p} alt=""></img>

      </div>
      <h2>Star Wars Episode 2: Attack of the Clones</h2>

      <div className="not-working-link">
        <h4>If the movie is not playing, click the link below 👇</h4>
        <h4><a href="https://flixrave.to/watch/movie-star-wars-episode-2-attack-of-the-clones-free-hd-1n4p/1-1" style={{color: 'white', textDecoration: 'underline'}}>
          Star Wars Episode 2: Attack of the Clones</a></h4>
      </div>

      <div className="movie1">
        <img src={episode2p} />
        <div className="movie1-content">
          <h2>Star Wars Episode 2: Attack of the Clones</h2>
          <p>Star Wars: Episode II – Attack of the Clones is a 2002 American epic 
            space opera film directed by George Lucas and written by Lucas and Jonathan Hales.
             The sequel to The Phantom Menace (1999), it is the fifth film in the Star Wars film series 
             and second chronological chapter of the "Skywalker Saga". The film stars Ewan McGregor, 
             Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, 
            Anthony Daniels, Kenny Baker, and Frank Oz.

            The story is set ten years after The Phantom Menace, as thousands of planetary systems 
            slowly secede from the Galactic Republic and join the newly formed Confederacy of Independent 
            Systems, led by former Jedi Master Count Dooku. With the galaxy on the brink of civil war, 
            Obi-Wan Kenobi investigates a mysterious assassination attempt on Senator Padmé Amidala, 
            which leads him to uncover a clone army in service of the Republic and the truth behind 
            the Separatist movement. Meanwhile, his apprentice Anakin Skywalker is assigned to protect 
            Amidala and develops a secret romance with her. Soon, the trio witness the onset of a new threat 
            to the galaxy: The Clone Wars.
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
export default ExternalPage2;
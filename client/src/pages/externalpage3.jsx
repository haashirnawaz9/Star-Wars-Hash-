// ExternalPage.js
import React from 'react';
import episode3p from '../images/episode3.jpeg'

const ExternalPage3 = () => {
  return (
    <div className="moviepage">
      <div className="movie">
        <img className="poster1"src={episode3p} alt=""></img>
        <video className="video"controls src width="900"></video>
        <img className="poster2" src={episode3p}alt=""></img>

      </div>
      <h2>Star Wars Episode 3: Revenge of the Sith</h2>

      <div className="not-working-link">
        <h4>If the movie is not playing, click the link below 👇</h4>
        <h4><a href="https://flixrave.to/watch/movie-star-wars-episode-3-revenge-of-the-sith-free-hd-oxn5/1-1" style={{color: 'white', textDecoration: 'underline'}}>
          Star Wars Episode 3: Revenge of the Sith</a></h4>
      </div>

      <div className="movie1">
        <img src={episode3p} />
        <div className="movie1-content">
          <h2>Star Wars Episode 3: Revenge of the Sith</h2>
          <p>Star Wars: Episode III – Revenge of the Sith is a 2005 American epic space opera 
            film that is the sequel to The Phantom Menace (1999) and Attack of the Clones (2002). 
            It is the sixth film in the Star Wars film series, the third installment in the Star Wars 
            prequel trilogy, and third chronological chapter of the "Skywalker Saga". It is written 
            and directed by George Lucas. The film stars Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, 
            Christopher Lee, Anthony Daniels, and Frank Oz.

          Revenge of the Sith is set three years after the onset of the Clone Wars as established in Attack of the Clones. 
          The Jedi are spread across the galaxy in a full-scale war against the Separatists. The Jedi Council 
          dispatches Jedi Master Obi-Wan Kenobi on a mission to defeat General Grievous, the head of the Separatist 
          army and Count Dooku's former apprentice, to put an end to the war. Meanwhile, after having visions of his wife Padmé Amidala 
          dying in childbirth, Jedi Knight Anakin Skywalker is tasked by the Council to spy on Palpatine, the Supreme Chancellor of the Galactic 
          Republic and, secretly, a Sith Lord.</p>

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
export default ExternalPage3
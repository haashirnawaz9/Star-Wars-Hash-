// ExternalPage.js
import React from 'react';
import episode6p from '../images/episode6.jpeg'

const ExternalPage6 = () => {

  return (
    <div className="moviepage">
      <div className="movie">
        <img className="poster1"src={episode6p} alt=""></img>
        <video className="video"controls src width="900"></video>
        <img className="poster2" src={episode6p} alt=""></img>

      </div>
      <h2>Star Wars Episode 6: Return of the Jedi</h2>

      <div className="not-working-link">
        <h4>If the movie is not playing, click the link below 👇</h4>
        <h4><a href="https://flixrave.to/watch/movie-star-wars-episode-6-return-of-the-jedi-free-hd-4q8j/1-1" style={{color: 'white', textDecoration: 'underline'}}>
          Star Wars Episode 6: Return of the Jedi</a></h4>
      </div>

      <div className="movie1">
        <img src={episode6p}  />
        <div className="movie1-content">
          <h2>Star Wars Episode 6: Return of the Jedi</h2>
          <p>Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) 
            is a 1983 American epic space opera film that is the sequel to Star Wars (1977)
            and The Empire Strikes Back (1980). It is the third installment in the original Star Wars trilogy 
            and the sixth chronological film in the "Skywalker Saga". It is directed by Richard Marquand based 
            on a screenplay by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive 
            producer. The film follows the ongoing struggle between the malevolent Galactic Empire and the freedom 
            fighters of the Rebel Alliance. As the Rebels attempt to destroy the Empire's second Death Star, 
            Luke Skywalker hopes to bring his father, Darth Vader, back from the dark side of the Force. 
            The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, 
            David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.
            </p>

          <div className="rating">
            <span>Rating:</span>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
            />
            9 / 10
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footerp">&copy; 2024 Haashir Nawaz | Star Wars Hash</p>
      </footer>
    </div>
  );
};
export default ExternalPage6;
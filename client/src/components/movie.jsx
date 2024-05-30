import '../App.css';
import React from "react";

const Movie = (props) => {
  return (
    <div className="Movie">
        <div>
            <img className="movieposter" src={props.src} alt=""></img>
        </div>
        <div>
            <h3>{props.name}</h3>
        </div>
        <div>
          <button onClick={props.onClick}>Watch Now</button>
        </div>
    </div>
  );
}

export default Movie;

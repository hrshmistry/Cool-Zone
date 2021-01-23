import React, { useState } from "react";
import "./styles.css";
const movieDB = {
  SciFi: [
    { name: "Avatar (2009)", rating: "9/10" },
    { name: "12 Monkeys", rating: "8.8/10" },
    { name: "Tomorrowland", rating: "8.6/10" },
    { name: "Arrival", rating: "7.8/10" }
  ],
  Fantasy: [
    { name: "The Chronicles of Narnia (2005)", rating: "8.8/10" },
    { name: "Pan’s Labyrinth (2006)", rating: "8.7/10" },
    { name: "Game of Thrones (2011)", rating: "8/10" },
    { name: "The Monkey King (2014)", rating: "7.5/10" }
  ],
  Romance: [
    { name: "Blue Valentine", rating: "9/10" },
    { name: "Revolutionary Road", rating: "8.8/10" },
    { name: "Unfaithful", rating: "8.7/10" },
    { name: "Jane Eyre", rating: "8.6/10" }
  ],
  Thriller: [
    { name: "Burning (2018)", rating: "9/10" },
    { name: "Source Code (2011)", rating: "8.8/10" },
    { name: "Good Time (2017)", rating: "8.7/10" },
    { name: "Blue Velvet (1986)", rating: "8.6/10" }
  ],
  Drama: [
    { name: "Parasite", rating: "7.5/10" },
    { name: "Forest Gump", rating: "7.8/10" },
    { name: "The Shawshank Redemption", rating: "9/10" },
    { name: "The God Father", rating: "8.7/10" }
  ]
};

var movies = Object.keys(movieDB);

export default function App() {
  const [userGenre, setGenre] = useState("SciFi");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎥 Cool Zone | Movie Recommendation </h1>
      <p style={{ fontSize: "smaller", marginTop: "-0.8rem" }}>
        Checkout my favorite movies, Select a genre to get started.
      </p>

      <div>
        {movies.map((genre) => (
          <button onClick={() => genreClickHandler(genre)} style={{}}>
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[userGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1.8px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

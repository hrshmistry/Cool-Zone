import React, { useState } from "react";
import "./styles.css";
const movieDB = {
  Horror: [
    { name: "Psycho", rating: "9/10" },
    { name: "The Shining", rating: "8.8/10" },
    { name: "Alien", rating: "8.7/10" },
    { name: "Tumbbad", rating: "8.6/10" },
    { name: "The Blue Elephant", rating: "8/10" },
    { name: "The Cabinet of Dr. Caligari", rating: "7.8/10" },
    { name: "The Exorcist", rating: "7.5/10" }
  ],
  Action: [
    { name: "The Dark Knight", rating: "9/10" },
    { name: "The Lord of rings : The return of king", rating: "8.8/10" },
    { name: "The Mountain II", rating: "8.7/10" },
    { name: "Inception", rating: "8.6/10" },
    { name: "The Matrix", rating: "8/10" }
  ],

  Drama: [
    { name: "The Shawshank Redemption", rating: "9/10" },
    { name: "Hababam Sinifi", rating: "8.8/10" },
    { name: "The God Father", rating: "8.7/10" },
    { name: "Schinder's List", rating: "8.6/10" },
    { name: "Fight Club", rating: "8/10" },
    { name: "Forest Gump", rating: "7.8/10" },
    { name: "Parasite", rating: "7.5/10" }
  ],
  War: [
    { name: "The Mountain II", rating: "9/10" },
    { name: "Saving Private Ryan", rating: "8.8/10" },
    { name: "LIfe Is Beautiful", rating: "8.7/10" },
    { name: "The Painist", rating: "8.6/10" },
    { name: "Grave of Fireflies", rating: "8/10" },
    { name: "Apocalypse Now", rating: "7.8/10" },
    { name: "Paths of Glory", rating: "7.5/10" }
  ],
  SciFiction: [
    { name: "Inception", rating: "9/10" },
    { name: "The Matrix", rating: "8.8/10" },
    { name: "Interstellar", rating: "8.7/10" },
    { name: "The Prestige", rating: "8.6/10" },
    { name: "Terminator 2 - Judgement Day", rating: "8/10" },
    { name: "Back to the Future", rating: "7.8/10" },
    { name: "Avengers: Infinity war", rating: "7.5/10" }
  ]
};

var movies = Object.keys(movieDB);

export default function App() {
  const [userGenre, setgenre] = useState("SciFiction");

  function genreClickHandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1>🎥 Cool Zone </h1>
    </div>
  );
}

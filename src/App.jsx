import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2FlOGVjY2NmOTM5YWQwMWMwN2I1MWM4NTgyZTkwNyIsIm5iZiI6MTcyODM3NTcyMC4yMzAwNzcsInN1YiI6IjY3MDRlODNiMzIyZDNlYTgzMTFkNDQwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CkHu5X6E6aG_0P2lAAhTdBpkWDSpkIXzohIC9Rzj6-8",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <>
      <div>I am container</div>
    </>
  );
}

export default App;

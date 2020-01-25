import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./CharacterList"

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <nav>
        <Link className="" to="/">Home</Link>
        <Link className="" to="/character-list">Characters</Link>
        </nav>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>


      <Route exact path="/"  />

      <Route exact path="/character-list" component={CharacterList} />
    </section>
  );
}

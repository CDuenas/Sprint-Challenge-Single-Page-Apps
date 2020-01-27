import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./CharacterList"
import SearchForm from "./SearchForm";
import styled, { css } from "styled-components";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Navigation className=".flex-column">
          <Link className="" to="/">Home</Link>
          <Link className="" to="/character-list">Characters</Link>
        </Navigation>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>


      <Route exact path="/"  />

      <Route exact path="/character-list" component={SearchForm} />
    </section>
  );
}

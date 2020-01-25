import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results)
        console.log(res.data.results)
      })
      .catch(error => {
        console.log("The data was not returned", error)
      });
  }, []);
  

  return (
    <Container className="character-list">
      <Row>
        {characters.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
            />
        );
      })}
      </Row>
    </Container>
  );
}

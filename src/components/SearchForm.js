import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

const characters = [
  {name: "Rick Sanchez", species: "Human",  gender: "Male"},
  {name: "Morty Smith", species: "Human",  gender: "Male"},
  {name: "Summer Smith", species: "Human",  gender: "Female"},
  {name: "Beth Smith", species: "Human",  gender: "Male"},
  {name: "Jerry Smith", species: "Human",  gender: "Male"},
  {name: "Abadango Cluster Princess", species: "Alien",  gender: "Female"},
  {name: "Abradolf Lincler", species: "Human",  gender: "Male"},
  {name: "Adjudicator Rick", species: "Human",  gender: "Male"},
  {name: "Agency Director", species: "Human",  gender: "Male"},
  {name: "Alan Rails", species: "Human",  gender: "Male"},
  {name: "Albert Einstein", species: "Human",  gender: "Male"},
  {name: "Alexander", species: "Human",  gender: "Male"},
  {name: "Alien Googah", species: "Alien",  gender: "Unknown"},
  {name: "Alien Morty", species: "Alien",  gender: "Male"},
  {name: "Alien Rick", species: "Alien",  gender: "Male"},
  {name: "Amish Cyborg", species: "Alien",  gender: "Male"},
  {name: "Annie", species: "Human",  gender: "Female"},
  {name: "Antenna Morty", species: "Human",  gender: "Male"},
  {name: "Antenna Rick", species: "Human",  gender: "Male"},
  {name: "Ants in my Eyes Johnson", species: "Human",  gender: "Male"}
]



export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [filteredChars, setFilteredChars] = useState([]);


  useEffect(() => {
    const filtered = characters.filter(character => character.name.includes(search));
    
    setFilteredChars(filtered);
  }, [search]);

  const handleChange =  e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
 
  return (
    <section className="search-form">
      <input 
        type="text"
        placeholder="Search for your favorite Character!"
        onChange={handleChange}
        value={search}
      />
      {filteredChars.map(character => (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Species: {character.species}</li>
        </ul>
              ))}
    </section>
  );
}

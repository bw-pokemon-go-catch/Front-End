import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  //hooks
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonCP, setPokemonCP] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [pokemonCPInput, setPokemonCPInput] = useState("");

  useEffect(() => {
    axios
      .get("https://pokemon-go-bw-backend.herokuapp.com/pokemon")
      .then(response => {
        console.log(response);
        setPokemonData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //event handlers
  const handlePokemonName = event => {
    setPokemonName(event.target.value);
  };
  const handlePokemonCP = event => {
    setPokemonCP(event.target.value);
  };
  const handleCalculation = event => {
    event.preventDefault();

    setPokemonCPInput(pokemonCP);

    setPokemon(
      pokemonData.filter(item => {
        return item.Name === pokemonName;
      })[0]
    );

    setPokemonName("");
    setPokemonCP("");
  };

  return (
    <div className="home">
      <h4 className="question">
        Let us know what kind of Pokemon you found, it's CP, and the amount of
        Pokeballs you have. And we will do the rest!
      </h4>

      <form onSubmit={event => handleCalculation(event)}>
        <br />
        <label>
          <input
            type="text"
            value={pokemonName}
            placeholder={"Enter Pokemon Name"}
            onChange={event => handlePokemonName(event)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={pokemonCP}
            placeholder={"Enter Pokemon CP"}
            onChange={event => handlePokemonCP(event)}
          />
        </label>
        <br />
        <button className="actionButton">Calculate</button>
      </form>

      <div className="output">
        <div className="textOutput">
          <img src={pokemon.ImageURL} alt="pokemon" />
          <div className="outputText">
            <div>Your Pokemon's CP: {pokemonCPInput}</div>
            <div>Pokemon's Max CP: {pokemon.MaxCP}</div>
            <div>Your Number of Pokeballs: {}</div>
            <div>
              Result:
              <br />
              {pokemon.MaxCP * 0.8 <= pokemonCPInput ? "Worthy!" : "Not Worthy"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

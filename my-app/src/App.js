import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import LoginPage from './components/login';
import SignupPage from './components/signup';

function App() {

  const [pokemonData, setPokemonData] = useState();

  useEffect( () => {
    axios.get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
      .then( response => {
        console.log(response.data[0])
        console.log(response.data[0]['MAX HP'])
        setPokemonData(response.data[0]['MAX CP'])
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
      Gotta catch 'em all!
      {pokemonData}
      <SignupPage />
      <LoginPage />
    </div>
  );
}

export default App;

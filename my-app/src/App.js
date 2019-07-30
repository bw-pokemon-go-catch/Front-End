import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import Header from './components/header';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar'

function App() {

  //hooks
  const [pokemonName, setPokemonName] = useState();

  useEffect( () => {
    axios.get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
      .then( response => {
        console.log(response)
        console.log(response.data[0]['Max HP'])
        setPokemonName(response.data[0]['Name'])
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  //event handlers
  const handleCalculation = event => {

  }

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Header />
     <p className='question'>Should I try to catch this Pokemon?</p> 
      <br />
      <form onSubmit={event => handleCalculation(event)}>
      </form>
      <br />
      <SignupPage />
      <LoginPage />
      {/* <AppRouter /> */}
    </div>
    </Router>
  );
}

export default App;

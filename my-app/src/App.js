import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {

  useEffect( () => {
    axios.get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
      .then( response => {
        console.log(response)
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;

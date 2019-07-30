import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  useEffect( () => {
    axios.get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
      .then( response => {
        console.log(response)
        console.log(response.data[0]['Max HP'])
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  return (
    <div>pokemon</div>
  )
}

export default Home;

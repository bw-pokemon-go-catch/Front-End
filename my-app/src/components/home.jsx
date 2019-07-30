import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

  //hooks
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonCP, setPokemonCP] = useState('');
  const [pokemonCPTemp, setPokemonCPTemp] = useState('');
  const [pokemonImg, setPokemonImg] = useState('');
  const [responseData, setResponseData] = useState('');
  const [yesOrNo, setYesOrNo] = useState('');

  useEffect( () => {
    axios.get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
      .then( response => {
        console.log(response)
        console.log(response.data[0]['MaxCP'])
        console.log(response.data[0].Name)
        setResponseData(response);
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  //event handlers
  const handlePokemonName = event => {
    setPokemonName(event.target.value);
  }
  const handlePokemonCP = event => {
    setPokemonCP(event.target.value);
  }
  const handleCalculation = event => {
    event.preventDefault();
    console.log(pokemonName);
    console.log(responseData.data[pokemonName]);
    setResponseData(responseData.data[pokemonName]);
    setPokemonImg(responseData.data[pokemonName].ImageURL);
    setPokemonCPTemp(pokemonCP);
    if((responseData.data[pokemonName].MaxCP * .8) <= pokemonCP){
      setYesOrNo('Yes!');
    } else
      setYesOrNo('Not recommended');
    setPokemonName('');
    setPokemonCP('');
  }

  return (
    <div className='home'>
      <h4>Should you catch this Pokemon?</h4>
      <form onSubmit={event => handleCalculation(event)}>
        <br />
        <label>
        <input
          type='text'
          value={pokemonName}
          placeholder={'Enter Pokemon Number'}
          onChange={event => handlePokemonName(event)}
        />
        </label>
        <br />
        <label>
        <input
          type='text'
          value={pokemonCP}
          placeholder={'Enter Pokemon CP'}
          onChange={event => handlePokemonCP(event)}
        />
        </label>
        <br />
        <button className='actionButton'>Calculate</button>
      </form>
      <img src={pokemonImg} alt='pokemon'></img>
      <div>Your pokemon's CP: {pokemonCPTemp}</div>
      <div>Pokemon's Max CP: {responseData.MaxCP}</div>
      <div>Should you catch this pokemon?<br />{yesOrNo}</div>
    </div>
  )
}

export default Home;

// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const PokemonList = () => {
//   const [data, setData] = useState('');
//
//   useEffect( () => {
//     axios.get('https://pokemon-go-bw-backend.herokuapp.com/pokemon')
//       .then( response => {
//         console.log(response)
//         setData(response)
//       })
//       .catch( error => {
//         console.log(error)
//       });
//   }, []);
//
//   return (
//     {data.forEach( item => {
//       <div>
//         {item[0]};
//       </div>
//     })}
//   )
// }
//
// export default PokemonList;

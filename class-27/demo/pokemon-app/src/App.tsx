import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Pokedex from './components/Pokedex/Pokedex';
import './App.css'

// type requestParams =  {
//   url: string;
//   method: string;
//   headers: Array<object>
// }

type JSONValue = | string | number | boolean | JSONObject| JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

export type pokemonRequest = {
  name: string;
}

type Pokemon = {
  name: string;
  level: number;
  abilities: JSONArray;
}

function App() {
  const [count, setCount] = useState<number>(0) // telling typescript how we intend to use someone elses function.

  const [pokedex, setPokedex] = useState<Array<Pokemon>>([]);
  const [isLoading, setLoading] = useState<boolean>(false); // you don't "need" generic types for primitive values, but it does not hurt.

  const fetchPokemon = async (requestParams: pokemonRequest): Promise<void> => {
    setLoading((true));
    const response: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${requestParams.name}`);
    const pokemonData: JSONObject = response.data;
    const abilityNames: Array<string> = pokemonData.abilities.map((values: JSONObject) => {
      return values.ability.name;
    });
    setLoading(false);
    setPokedex((current) => [...current, {name: requestParams.name, level: 0, abilities: abilityNames}]);
  }
  
  console.log(pokedex); // state setters are asynchronous.
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* When we call the setter, we have 2 options
          option 1 : we simply put the value we want to update to
          options 2: pass a callback function, that receives the current state value as a parameter.
        */}
        <button onClick={() => fetchPokemon({ name: 'pikachu '})}>
          Fetch Pikachu
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Pokedex data={pokedex} />
      </div>
    </>
  )
}

export default App

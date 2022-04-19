import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Components/Title";
import GalleryBoard from "./Components/GalleryBoard";
import {Character} from "./Model/Character";



export default function App() {

    const [characters, setCharacters] = useState<Character[]>([]);

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])



    const [count, setCount] = useState<number>(0)
    const [text, setText] = useState<string>("")

    const clickCounter = () => {
        console.log("Click me!")
        setCount(count +1)

    }
    console.log(count)

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        console.log(event.target.value)
        setText(event.target.value)
    }



  return (
    <div className="App">
      <Title />
        {/*<input onChange={onTextChange}/>*/}
        {/*<button onClick={clickCounter}>Click me!</button>*/}
        {/*/!*<div>{items}</div>*!/*/}
        {/*/!*<button onClick={filterNumbers}>{items}</button>*!/*/}
        <GalleryBoard characters={characters}/>
    </div>
  );
}

/*<GalleryBoard character={characters}/>*/


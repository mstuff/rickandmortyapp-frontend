import React, {useEffect, useState} from 'react';

import './App.css';
import Title from "./Components/Title";
import GalleryBoard from "./Components/GalleryBoard";
import {Character} from "./Model/Character";


export default function App() {

    const [fetchedCharactersPage1, setFetchedCharactersPage1] = useState<Character[]>([]);

    const fetchCharactersApiPage1 = () =>
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Network request error")
                }
            })
            .catch(error => console.error(error));

    useEffect(() => {
        fetchCharactersApiPage1()
            .then(body => setFetchedCharactersPage1(body.results))

    }, []);

    return (
        <div className="App">
            <Title/>
            <GalleryBoard charactersToDisplayOnGalleryBoard={fetchedCharactersPage1}/>

        </div>
    );
}






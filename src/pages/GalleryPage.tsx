import GalleryBoard from "../Components/GalleryBoard";
import React, {useEffect, useState} from "react";
import {Character} from "../Model/Character";


export default function GalleryPage(){

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


    return <GalleryBoard charactersToDisplayOnGalleryBoard={fetchedCharactersPage1}/>
}
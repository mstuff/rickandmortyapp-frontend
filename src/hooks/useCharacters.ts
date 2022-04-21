import {useEffect, useState} from "react";
import {Character} from "../Model/Character";
import fetchCharactersApiPage1 from "../service/RickMortyApi";


export default function useCharacters(){

    const [fetchedCharactersPage1, setFetchedCharactersPage1] = useState<Character[]>([]);

    useEffect(() => {
        fetchCharactersApiPage1()
            .then(body => setFetchedCharactersPage1(body.results))

    }, []);

    return fetchedCharactersPage1
}
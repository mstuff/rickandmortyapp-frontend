import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import './GalleryBoard.css'
import {ChangeEvent, useState} from "react";

type GalleryBoardProps = {
    characters : Character[]
}

export default function GalleryBoard({characters}: GalleryBoardProps){

    const [charactersNew, setCharactersNew] = useState<string>("")

    const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharactersNew(event.target.value)
    }


    return <div>
        <input value={charactersNew} onChange={onFilterChange}/>
        <button onClick={() => onFilterChange}>Click me!</button>
        <div className={"gallery-board"}>{characters.filter(characters => characters.name.toLowerCase().includes(charactersNew.toLowerCase()) || characters.species.toLowerCase().includes(charactersNew.toLowerCase()) ).map(characters => <div className={"board-character"}><CharacterCard character={characters} /></div>)}</div>
        </div>
}

// export default function GalleryBoard(){
//     return <div><CharacterCard /></div>
//
// }

//-Erstellung GalleryBoard
//-Soll CharactersCards darstellen
//-Bekommt Liste mit Character

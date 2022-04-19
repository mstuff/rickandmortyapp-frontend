import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import './GalleryBoard.css'
import {ChangeEvent, KeyboardEventHandler, useState} from "react";

type GalleryBoardProps = {
    characters : Character[]
}

export default function GalleryBoard({characters}: GalleryBoardProps){

    const [filteredCharacters, setFilteredCharacters] = useState<string>("")
    const [text, setText] = useState<string>("")

    const filterByText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const onFilterClick = () =>{
        setFilteredCharacters(text)
    }

    const onClickReset= () =>{
        setFilteredCharacters("")
    }

    const onFilterChange =(event: any) => {
        if (event.key === 'Enter')
        setFilteredCharacters(event.target.value)
    }

    return <div>
        <input onChange={filterByText}/>
        <button onClick={onFilterClick}>Click me!</button>
        <button onClick={onClickReset}>RESET</button>
        <input onKeyPress={onFilterChange}/>
        <div className={"gallery-board"}>
            {characters.filter(characters => characters.name.toLowerCase().includes(filteredCharacters.toLowerCase()) || characters.species.toLowerCase().includes(filteredCharacters.toLowerCase()) )
                .map(characters =>
                    <div className={"board-character"}>
                        <CharacterCard character={characters} />
                    </div>)}
        </div>
        </div>
}

// export default function GalleryBoard(){
//     return <div><CharacterCard /></div>
//
// }

//-Erstellung GalleryBoard
//-Soll CharactersCards darstellen
//-Bekommt Liste mit Character

import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import './GalleryBoard.css'
import {ChangeEvent, KeyboardEventHandler, useState} from "react";

type GalleryBoardProps = {
    characters : Character[]
}

export default function GalleryBoard({characters}: GalleryBoardProps){

    const [filteredCharacterName, setFilteredCharacterName] = useState<string>("")
    const [text, setText] = useState<string>("")


    const filterByText = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        setText(event.target.value)
    }

    const onFilterClick = () =>{
        setFilteredCharacterName(text)
    }

    const onClickReset= () =>{
        setFilteredCharacterName("")
    }


    const onFilterChange = (event: any)=> {
        console.log(event)
        if (event.key === 'Enter')
            setFilteredCharacterName(event.target.value)
    }



    const filteredCharacters = characters.filter(characters => characters.name.toLowerCase().includes(filteredCharacterName.toLowerCase()))



    return <div>
        <input onChange={filterByText}/>
        <button onClick={onFilterClick}>Click me!</button>
        <button onClick={onClickReset}>RESET</button>
        <input onKeyPress={onFilterChange}/>

        <div className={"gallery-board"}>
            {filteredCharacters.length
            ? filteredCharacters.map(characters =>
            <div className={"board-character"}>
                <CharacterCard character={characters} />
            </div>)
                :<h1>Character not Found</h1>}
        </div>

        </div>
}


// {characters.filter(characters => characters.name.toLowerCase().includes(filteredCharacterName.toLowerCase()) || characters.species.toLowerCase().includes(filteredCharacterName.toLowerCase()) )
//     .map(characters =>
//         <div className={"board-character"}>
//             <CharacterCard character={characters} />
//         </div>)}
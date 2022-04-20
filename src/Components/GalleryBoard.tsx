import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import "./GalleryBoard.css"
import {ChangeEvent, useState} from "react";

type GalleryBoardProps = {
    charactersToDisplayOnGalleryBoard: Character[];
}

export default function GalleryBoard({charactersToDisplayOnGalleryBoard}: GalleryBoardProps) {

    const [text, setText] = useState<string>("");
    const [filter, setFilter] = useState<string>("");

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const startSearchOnClick = () => {
        setFilter(text);
    }




    return <div>
        <div>
            <input placeholder={"wat willste?"} value={text} onChange={onTextChange}/>
            <button onClick={startSearchOnClick}> Start search! </button>

        </div>
        <div className={"gallery-board"}>{charactersToDisplayOnGalleryBoard
            .filter(element => element.name.toLowerCase().includes(filter.toLowerCase())
                || element.origin.name.toLowerCase().includes(filter.toLowerCase())
                || element.species.toLowerCase().includes(filter.toLowerCase()))
            .map(eachCharacterFromArray => <CharacterCard singleCharacterToPutOnCard={eachCharacterFromArray}/>)}
        </div>
    </div>

}


//-Erstellung GalleryBoard
//-Soll CharactersCards darstellen
//-Bekommt Liste mit Character

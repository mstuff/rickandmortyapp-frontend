import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import "./GalleryBoard.css"

type GalleryBoardProps = {
    charactersToDisplayOnGalleryBoard: Character[];
}

export default function GalleryBoard({charactersToDisplayOnGalleryBoard}: GalleryBoardProps) {
    return <div className={"gallery-board"}>{charactersToDisplayOnGalleryBoard.map(
        eachCharacterFromArray => <CharacterCard singleCharacterToPutOnCard={eachCharacterFromArray}/>)}
    </div>

}


//-Erstellung GalleryBoard
//-Soll CharactersCards darstellen
//-Bekommt Liste mit Character

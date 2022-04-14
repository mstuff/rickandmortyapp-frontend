import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import './GalleryBoard.css'

type GalleryBoardProps = {
    characters : Character[]

}

export default function GalleryBoard({characters}: GalleryBoardProps){
    return <div className={"gallery-board"}>{characters.map(characters => <div className={"board-character"}><CharacterCard character={characters} /></div>)}</div>

}

// export default function GalleryBoard(){
//     return <div><CharacterCard /></div>
//
// }

//-Erstellung GalleryBoard
//-Soll CharactersCards darstellen
//-Bekommt Liste mit Character

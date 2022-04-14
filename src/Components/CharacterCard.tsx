import {Character} from "../Model/Character";
import './CharacterCard.css'

type characterCardProps ={
    character: Character

}



export default function CharacterCard({character} :characterCardProps){
    return<div className={"character-card"}>
        <div className={"character-header"}>
            <div>{character.name} </div>
            <div>({character.id})</div>
        </div>
        <div className={"character-image"}><img src={character.image}/></div>
        <div className={"character-origin-name"}>{character.origin.name}</div>
    </div>

}

//Bekommt Array mit Character
//Erstellt pro Character aus Array eine CharacterCard
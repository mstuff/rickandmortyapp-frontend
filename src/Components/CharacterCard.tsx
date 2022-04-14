import {Character} from "../Model/Character";
import "./CharacterCard.css"


type characterCardProps = {
    singleCharacterToPutOnCard: Character;
}


export default function CharacterCard({singleCharacterToPutOnCard}: characterCardProps) {
    return <div className={"character-card"}>

        <div className={"id-and-name"}>
            <div><p>{singleCharacterToPutOnCard.name}</p></div>
        </div>

        <div className={"image"}><img src={singleCharacterToPutOnCard.image}
        alt={"This image shows a Rick-and-Morty-character."}/>
        </div>
        <div className={"origin"}>{singleCharacterToPutOnCard.origin.name}</div>
    </div>

}

//Bekommt Array mit Character
//Erstellt pro Character aus Array eine CharacterCard
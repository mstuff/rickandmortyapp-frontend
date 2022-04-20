import {Character} from "../Model/Character";
import "./CharacterCard.css"
import {useNavigate} from "react-router-dom";


type characterCardProps = {
    singleCharacterToPutOnCard: Character;
}


export default function CharacterCard({singleCharacterToPutOnCard}: characterCardProps) {

    const navigate = useNavigate();
    const onCardClick = () => {
        navigate(`/character/${singleCharacterToPutOnCard.id}`);
    }

    return <div className={"character-card"} onClick={onCardClick}>

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
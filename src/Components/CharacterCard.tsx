

import {Character} from "../Model/Character";

type characterCardProps ={
    singleCharacterToPutOnCard: Character;
}



export default function CharacterCard({singleCharacterToPutOnCard} :characterCardProps){
    return<div>
        <div>{singleCharacterToPutOnCard.name}</div>
        <div>{singleCharacterToPutOnCard.id}</div>
        <div><img src={singleCharacterToPutOnCard.image}/></div>
        <div>{singleCharacterToPutOnCard.origin.name}</div>
    </div>

}

//Bekommt Array mit Character
//Erstellt pro Character aus Array eine CharacterCard
import {useParams} from "react-router-dom";
import {Character} from "../Model/Character";

type characterDetailsProps = {
    charactersForDisplay: Character [];
}

export default function CharacterDetailsPage({charactersForDisplay}: characterDetailsProps) {

    const params = useParams();
    const id: number = Number(params.id);

    return <div>
        <div> {charactersForDisplay[id - 1].name} </div>

        <div className={"image"}><img src={charactersForDisplay[id - 1].image}
                                      alt={"This image shows a Rick-and-Morty-character."}/>
        </div>
        <div> {charactersForDisplay[id - 1].status} </div>
        <div> {charactersForDisplay[id - 1].species} </div>
        <div> {charactersForDisplay[id - 1].type} </div>
        <div> {charactersForDisplay[id - 1].gender} </div>
        <div> {charactersForDisplay[id - 1].origin.name} </div>
        <div> {charactersForDisplay[id - 1].location.name} </div>
    </div>
}
import axios from "axios";


export default function RickMortyApi (){

   return    axios.get("https://rickandmortyapi.com/api/characte")
            .then(response => response.data)
            .catch(error => console.error(error));

}
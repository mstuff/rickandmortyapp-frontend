


export default function RickMortyApi (){

   return    fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Network request error")
                }
            })
            .catch(error => console.error(error));

}
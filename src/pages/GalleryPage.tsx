import GalleryBoard from "../Components/GalleryBoard";
import {Character} from "../Model/Character";

type galleryPageProps = {
    fetchedCharactersForGallery : Character [];
}

export default function GalleryPage({fetchedCharactersForGallery}: galleryPageProps){
    return <GalleryBoard charactersToDisplayOnGalleryBoard={fetchedCharactersForGallery}/>
}
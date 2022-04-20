import GalleryBoard from "../Components/GalleryBoard";
import React, {useEffect, useState} from "react";
import {Character} from "../Model/Character";

type galleryPageProps = {
    fetchedCharactersForGallery : Character [];
}


export default function GalleryPage({fetchedCharactersForGallery}: galleryPageProps){
    return <GalleryBoard charactersToDisplayOnGalleryBoard={fetchedCharactersForGallery}/>
}
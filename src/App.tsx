import React, {useEffect, useState} from 'react';

import './App.css';
import Title from "./Components/Title";
import {Character} from "./Model/Character";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import fetchCharactersApiPage1 from "./service/RickMortyApi";
import useCharacters from "./hooks/useCharacters";

export default function App() {

    const fetchedCharactersPage1 : Character [] = useCharacters();



    return (
        <div className="App">


            <BrowserRouter>
                <Title/>
                <Routes>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/gallery"} element={<GalleryPage fetchedCharactersForGallery={fetchedCharactersPage1}/>}/>
                    <Route path={"/character/:id"} element={<CharacterDetailsPage charactersForDisplay={fetchedCharactersPage1}/>}/>


                </Routes>

            </BrowserRouter>


        </div>
    );
}






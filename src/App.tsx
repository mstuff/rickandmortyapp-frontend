import React, {useEffect, useState} from 'react';

import './App.css';
import Title from "./Components/Title";
import GalleryBoard from "./Components/GalleryBoard";
import {Character} from "./Model/Character";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {


    return (
        <div className="App">


            <BrowserRouter>
                <Title/>
                <Routes>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/gallery"} element={<GalleryPage/>}/>


                </Routes>

            </BrowserRouter>


        </div>
    );
}






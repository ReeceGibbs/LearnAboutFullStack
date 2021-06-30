import React, { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-player'
import Gallery from 'react-photo-gallery'
import { photos } from '../images/Photos'
import MenuItem from './MenuItem'
import Letter from './Letter'
import LetterLogo from '../images/icons/letter.png'
import CameraLogo from '../images/icons/camera.png'
import SongsLogo from '../images/icons/saxophone.png'
import LetterHeader from '../images/icons/ice-cream.png'
import CameraHeader from '../images/icons/croissant.png'
import SongsHeader from '../images/icons/chocolate-bar.png'

const spotifySize = {
    width: '100%',
    height: 700
};

const spotifyView = 'list';

const spotifyTheme = 'black';

//our menu component
const Menu = () => {

    const [isSmallDisplay, setIsSmallDisplay] = useState(window.innerWidth < 1200);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const smallDisplayCheck = window.innerWidth < 1200;
            if (smallDisplayCheck !== isSmallDisplay) setIsSmallDisplay(smallDisplayCheck);
        }, false);
    }, [isSmallDisplay]);

    return (
        <div className= {`${isSmallDisplay ? "small-display" : ""} d-flex justify-content-center flex-row bd-highlight mb-3 menu`}>
            <MenuItem headerLogo = {LetterHeader} logo = {LetterLogo} label = "a letter to you" modalType = "letter-modal" body = {<Letter />}/>
            <MenuItem headerLogo = {CameraHeader} logo = {CameraLogo} label = "our memory box" modalType = "album-modal" body = {<Gallery photos = {photos} direction = {"column"}/>}/>
            <MenuItem headerLogo = {SongsHeader} logo = {SongsLogo} label = "our favourite songs" modalType = "songs-modal" body = {<SpotifyPlayer uri="spotify:playlist:1gfwwSWTHfzzOHlRWyy3ex" size = {spotifySize} view = {spotifyView} theme = {spotifyTheme}/>}/>
        </div>
    )
}

export default Menu

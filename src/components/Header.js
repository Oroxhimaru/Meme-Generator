import React from 'react';
import Troll from "../images/Troll-Face.png";
export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={Troll} alt='Troll Face' />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 5</h4>
        </header>
    )
}

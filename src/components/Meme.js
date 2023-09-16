import React, { useState } from 'react'; // Correct import statement
import memesData from "../memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg"); // Correct spelling of useState

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
       // setMemeImage(memesArray[randomNumber].url);
       const url = memesArray[randomNumber].url;
       setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
       }));
    }
const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
});
const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {/* Display the meme image */}
            <img src={meme.randomImage} alt="MEME TEMPLATE"  className="meme--image" />
        </main>
    )
}


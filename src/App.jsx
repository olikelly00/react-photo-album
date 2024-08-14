
import React, { useState } from 'react';
import { imageList } from './data.js';

function Title() {

    return (
        <div className="title">
            <h1>Bienvenue dans ma galerie</h1>
            <h3> Ce recueil d'images est consacré aux merveilles de l'Europe</h3>
        </div>
    );
}

function Subtitle() {
    return (
        <div className="subtitle">
            <p>Feuilletez mes photos en cliquant sur 'Suivant' en bas</p>
        </div>
    )
}

function Image({ imageIndex }) {
    let image = imageList[imageIndex];
    return (
        <>
            <img src={image.url} alt={image.alt}></img>
        </>
    )
}

function Gallery() {
    const [imageIndex, setImageIndex] = useState(0);

    function handleNextClick() {
        setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);

    }
    function handleBackClick() {
        setImageIndex((prevIndex) => (prevIndex- 1) % imageList.length);

    }

    return (
        <>
        <div className="gallery">
            < Image imageIndex={imageIndex} />
            <div className="buttons-container">
            {imageIndex > 0 && (
                    <button onClick={handleBackClick}>
                        Précédent
                    </button>
                )}
            {imageIndex < imageList.length-1 && (
                    <button onClick={handleNextClick}>
                        Suivant
                    </button>
                )}
            </div>
            </div>
        </>
    )
}



function App() {
    return (
        <>
            <div>
                <Title />
                <Subtitle />
                <Gallery />
            </div>
        </>
    )
}

export default App
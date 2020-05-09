import React, { useContext } from 'react';
import { GameContext } from '../context/gameContext';
import "bootstrap/dist/css/bootstrap.min.css";

const GameInfo = () => {

    const { state } = useContext(GameContext);

    const {game} = state;

    return(
        <>
            <div className="title-box">
                <p className="title-text">{game?.title}</p>
            </div>
            <div className="t-i-box">
                <div className="trailor">
                <iframe className='trailor-frame' src={`https://www.youtube.com/embed/${game?.videoID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="basic-info">
                    <div className="basic-form">
                        <p className="form-label">Available On: {game?.available}</p>
                        <p className="form-label">Developer: {game?.developer}</p>
                        <p className="form-label">Released: {game?.releasedate}</p>
                        <p className="form-label">Genre: {game?.genre}</p>
                    </div>
                </div>
            </div>
            <div className="main-box">
                <p className="form-label">Storyline:</p>
                <div className="story-out">
                    <p className="story-text">{game?.storyline}</p> 
                </div>
            </div>
        </>
    )
}
export default GameInfo;

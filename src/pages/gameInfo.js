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
                <iframe className='trailor-frame' src={`https://www.youtube.com/embed/${game?.videoID}?autoplay=1&controls=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&color=white&iv_load_policy=3&showinfo=0`} frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                </div>
                <div className="basic-info">
                    <div className="basic-form">
                        <p className="form-label">Available On : <span className="answer">{game?.available}</span> </p>
                        <p className="form-label">Developer : <span className="answer">{game?.developer}</span> </p>
                        <p className="form-label">Released : <span className="answer">{game?.releasedate}</span> </p>
                        <p className="form-label">Genre : <span className="answer">{game?.genre}</span> </p>
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

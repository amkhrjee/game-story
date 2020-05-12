import React, { useContext } from 'react';
import { GameContext } from '../context/gameContext';
import { useHistory } from 'react-router';
import { SET_SINGLE_GAME } from '../context/action.types';

export const GameCardComp = ({game, gameKey}) => {


    const { dispatch } = useContext(GameContext);

    const history = useHistory();

    const viewSingleGame = game => {
        dispatch({
            type: SET_SINGLE_GAME,
            payload: game,
            key: gameKey
        })

        
        history.push("/game-story/gameInfo");
    }
    return(
       <>
        <div className="game-card">
            <div className="card-container">
            <img onClick={() => viewSingleGame(game)} className="game-card-image" src={game.poster} alt="X" />
            <div onClick={() => viewSingleGame(game)} className="overlay"><p className="game-card-text">{game.title}</p></div>
            </div>
        </div>
       </>
    )
}


import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DownArrow from '../assets/down-arrow.svg';
import firebase from "firebase/app";
import { GameContext } from '../context/gameContext';
import { useHistory } from 'react-router';
import { SET_SINGLE_GAME } from '../context/action.types';
import { ListGroup, ListGroupItem, Row, Container } from 'reactstrap';
import { GameCardComp } from "../components/GameCard";
const Home = () => {
    
    const {state, dispatch} = useContext(GameContext);
    const {games} = state;

    //const history = useHistory();

    return(
        <>
            <Container>
                {games.length === 0 ? (
                    <div>
                        No Games Found in Database
                    </div>
                ) : (
                    <>
                    <div className="latest-game">
                        <p className="latest-game-text">Games</p>
                        <img className="right-arrow" src={DownArrow} alt="X" />
                    </div>
                     <ul className="horizontal-list">
                     {Object.entries(games).map(([key, value]) => (
                            <li key= {key}>
                                <GameCardComp game = {value} gameKey = {key} />
                            </li>
                        ))}
                     </ul>
                    </>
                )}
            </Container>
        </>
    )
}

export default Home;
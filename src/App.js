import React, { useState, useReducer, useEffect } from 'react';
import Footer from './layout/Footer';
import NavBar from './layout/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import pnF from './pages/pnF';
import GameInfo from './pages/gameInfo';

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

//context api
import { UserContext } from './context/userContext';
import firebaseConfig from './config/firebaseConfig';
import dashboard from './pages/dashboard';
import { GameContext } from './context/gameContext';
import reducer from './context/reducer';
import { SET_SINGLE_GAME, SET_GAME, SET_LOADING, GAME_UPDATE } from './context/action.types';
import { Container } from 'reactstrap';


const initialState = {
  games: [],
  game: {},
  gameToUpdate: null,
  gameToUpdateKey: null,
  isLoading: false
}


//init firebase
firebase.initializeApp(firebaseConfig); 

const App = () => {
  const [user, setUser] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getGames = async () => {
    dispatch({
      type: SET_LOADING,
      payload: true
    });

  const getGamesRef = await firebase.database().ref("/games");
  getGamesRef.on("value", snapshot => {
    dispatch({
      type: SET_GAME,
      payload: snapshot.val()
    })
    dispatch({
      type: SET_LOADING,
      payload: false
    })
    
  })
}
  useEffect(() => {
    getGames();
  }, [])
  
  
  return(
    <Router>
    <UserContext.Provider value={{user, setUser}}>
      <GameContext.Provider value={{state, dispatch}}>
      <NavBar/>
      <Container>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/game-story/signup" component={SignUp}/>
        <Route exact path = "/game-story/signin" component={SignIn}/>
        <Route exact path = "/game-story/dashboard" component={dashboard}/>
        <Route exact path = "/game-story/gameInfo" component={GameInfo}/>
        <Route exact path = "*" component={pnF}/>
      </Switch>
      </Container>
      <Footer/>
      </GameContext.Provider>
    </UserContext.Provider> 
    </Router>
  )

}
export default App;
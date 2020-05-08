// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useContext, useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
// import firebase from 'firebase/app';
// import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";

// import { GameContext } from '../context/gameContext';
// import { useHistory } from 'react-router';
// import { GAME_UPDATE } from '../context/action.types';


// const gameInfo = () => {

//     // const {dispatch} = useContext(GameContext);
//     const context = useContext(GameContext)
//     const history = useHistory();



//     return(
//         <>
//             <div className="top-box">
//             <h1>{context.games.title}</h1>
            
//             {/* <Form>
//             <FormGroup row>
//             <Label className="form-label" sm={2} for="poster">Poster:</Label>
//             <Col sm={10}>
//             <Input 
//             className="form-input" 
//             type="file"
//             multiple={false}
//             onChange={e => imagePicker(e)}
//             accept="image/*"
//             id="poster" />
//             </Col>
//             </FormGroup>
//             <Button type="submit" className="button-box">
//                         <p className="button-text">Submit</p>
//                 </Button>
//             </Form>
//             </div>
//             <div className="t-i-box">
//                 <div className="trailor">
//                 <iframe className="trailor-frame" src={`https://www.youtube.com/embed/${games.videoID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt='Failed to Load'></iframe>
//                 </div>
//                 <div className="basic-info">
//                     <Form onSubmit={handleSubmit} className="basic-form">
//                         <FormGroup row>
//                             <Label className="form-label" for="available" sm={2}>Available:</Label>
//                             <Col sm={10}>
//                             <Input 
//                             className="form-input" 
//                             type="select" 
//                             value={available}
//                             onChange={e => setAvailable(e.target.value)}
//                             id="available">
//                                 <option>PC</option>
//                             <option>PlayStation</option>
//                             <option>Xbox</option>
//                             <option>PS + Xbox</option>
//                             <option>Nintendo</option>
//                             </Input>
                            
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label className="form-label" for="dev" sm={2}>Developer:</Label>
//                             <Col sm={10}>
//                             <Input 
//                             className="form-input"
//                             value={developer}
//                             onChange={e => setDeveloper(e.target.value)} 
//                             type="text"  
//                             id="dev"/>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label className="form-label" for="relDate" sm={2}>Release:</Label>
//                             <Col sm={10}>
//                             <Input 
//                             className="form-input" 
//                             value={release}
//                             onChange={e=> setRelease(e.target.value)}
//                             type="date" 
//                             id="relDate"/>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label className="form-label" for="genre" sm={2}>Genre:</Label>
//                             <Col sm={10}>
//                             <Input 
//                             className="form-input" 
//                             value={genre}
//                             onChange={e => setGenre(e.target.value)}
//                             type="select" 
//                             id="genre">
//                                 <option>Horror</option>
//                                 <option>Aliens</option>
//                                 <option>Space</option>
//                                 <option>Adventure</option>
//                                 <option>Historical</option>
//                             </Input>
//                             </Col>
//                         </FormGroup>
//                         <Button type="submit" className="button-box">
//                         <p className="button-text">Submit</p>
//                         </Button>
//                     </Form>
                    
//                 </div>
//             </div>
//             <div className="main-box">
//                 <Form >
//                     <FormGroup>
//                         <Label className="form-label" for="storyline">Storyline:</Label>
//                         <Input 
//                         type="text" 
//                         className="story-input"
//                         value={storyline}
//                         onChange={e => setStoryline(e.target.value)} 
//                         placeholder="Don't Press Enter" id="storyline"/>
//                     </FormGroup>
//                     <Button type="submit" className="button-box">
//                         <p className="button-text">Submit</p>
//                 </Button>
//                 </Form>
                
//             </div>
//             <div className="button">
//             <div className="buttton-box">
               
//             </div> */}
//             </div>
//         </>
//     )
// }

// export default gameInfo;
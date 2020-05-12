/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import firebase from 'firebase/app'

import { readAndCompressImage } from 'browser-image-resizer'
import { imageConfig } from '../utils/config';
import { GameContext } from '../context/gameContext';
import { useHistory } from 'react-router';
import { v4 } from 'uuid';
import { GAME_UPDATE } from '../context/action.types';


const dashboard = () => {

    const {state, dispatch} = useContext(GameContext);
    const {gameToUpdate, gameToUpdateKey } = state;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [available, setAvailable] = useState("");
    const [release, setRelease] = useState("");
    const [genre, setGenre] = useState("");
    const [developer, setDeveloper] = useState("");
    const [storyline, setStoryline] = useState("");
    const [videoID, setVideoID] = useState("");
    const [discussions, setDiscussions] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (gameToUpdate) {
          setTitle(gameToUpdate.title);
          setAvailable(gameToUpdate.available);
          setRelease(gameToUpdate.releasedate);
          setGenre(gameToUpdate.genre);
          setDeveloper(gameToUpdate.developer);
          setStoryline(gameToUpdate.storyline);
          setVideoID(gameToUpdate.videoID);
          setDownloadUrl(gameToUpdate.poster);
    
          // also setting is update to true to make the update action instead the addContact action
          setIsUpdate(true);
        }
      }, [gameToUpdate]);

      const imagePicker = async e => {
          try{
            const file = e.target.files[0];
            
            var metaData = {
                contentType: file.type
            }

            let resizedImage = await readAndCompressImage(file, imageConfig);

            const storageRef = await  firebase.storage().ref();
            var uploadTask = storageRef
            .child("posters/" + v4())
            .put(resizedImage, metaData)

            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                snapshot => {
                    setIsUploading(true);
                    var progress = 
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100;

                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            setIsUploading(false);
                            console.log("Uploading Paused");
                            break;
                        case firebase.storage.TaskState.RUNNING:
                            console.log("Upload in progress...")
                            break;
                    }
                    if(progress === 100) {
                        setIsUploading(false);
                    }
                }, error => {
                    console.log(error)
            }, () => {
                uploadTask.snapshot.ref
                .getDownloadURL()
                .then(downloadURL => {
                    setDownloadUrl(downloadURL)
                })
                .catch(error => console.error(error));
                    
                }
            )


        }catch(error) {
            console.error(error);
        }
    }

    const addGame = async () => {
        try{
            firebase
            .database()
            .ref("games/" + v4())
            .set({
                title,
                release,
                available,
                genre,
                discussions,
                storyline,
                poster: downloadUrl,
                developer,
                videoID
            });
        } catch(error) {
            console.log(error)
        }
    }

    
    const handleSubmit = e => {
        e.preventDefault();
        addGame();
        alert("Success");
    
        dispatch({
        type: GAME_UPDATE,
        payload: null,
        key: null
        })
        history.push("/game-story");
        }
    return(
        <>
            <div className="heading">
                <h1 className="heading-text">Add Game Information</h1>
            </div>
            <Form onSubmit={handleSubmit} className="title">
                <FormGroup row>
                    <Label className="form-label" sm={2} for="title">Title:</Label>
                    <Col sm={10}>
                    <Input 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className="form-input" 
                    type="text" 
                    id="title" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="form-label" sm={2} for="poster">Poster:</Label>
                    <Col sm={10}>
                    <Input 
                    className="form-input" 
                    type="file"
                    multiple={false}
                    onChange={e => imagePicker(e)}
                    accept="image/*"
                    id="poster" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="form-label" for="available" sm={2}>Available:</Label>
                    <Col sm={10}>
                    <Input 
                    className="form-input" 
                    type="select" 
                    value={available}
                    onChange={e => setAvailable(e.target.value)}
                    id="available">
                    <option className="options">PC</option>
                    <option>PC + PS + Xbox</option>
                    <option>PlayStation</option>
                    <option>Xbox</option>
                    <option>PS + Xbox</option>
                    <option>PS + PC</option>
                    <option>Nintendo</option>
                    <option>PC + PS + Xbox + Nintendo</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="form-label" for="dev" sm={2}>Developer:</Label>
                    <Col sm={10}>
                    <Input 
                    className="form-input"
                    value={developer}
                    onChange={e => setDeveloper(e.target.value)} 
                    type="text"  
                    id="dev"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="form-label" for="relDate" sm={2}>Release:</Label>
                    <Col sm={10}>
                    <Input 
                    className="form-input" 
                    value={release}
                    onChange={e=> setRelease(e.target.value)}
                    type="text"
                    placeholder="29th Feb 2056" 
                    id="relDate"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="form-label" for="genre" sm={2}>Genre:</Label>
                    <Col sm={10}>
                    <Input 
                    className="form-input" 
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    type="text" 
                    id="genre">
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="form-label" for="vidId" sm={2}>Video ID:</Label>
                    <Col sm={10}>
                    <Input 
                    className="form-input" 
                    value={videoID}
                    onChange={e=> setVideoID(e.target.value)}
                    type="text" 
                    id="vidId"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                        <Label className="form-label" for="storyline">Storyline:</Label>
                        <Input 
                        type="textarea" 
                        className="story-input"
                        value={storyline}
                        onChange={e => setStoryline(e.target.value)} 
                        placeholder="Only copy-paste from Wikipedia, lol" id="storyline"/>
                    </FormGroup>
                    <Button type="submit" className="button-box">
                        <p className="button-text">Submit</p>
                    </Button>
                </Form>
                    
        </>
    )
}

export default dashboard;
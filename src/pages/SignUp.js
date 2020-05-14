import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../layout/Header';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css'
import Footer from '../layout/Footer';

import firebase from 'firebase/app';
import { UserContext } from '../context/userContext';
import { Redirect } from 'react-router-dom';
import { readAndCompressImage } from 'browser-image-resizer';
import { imageConfig } from '../utils/config';
import { v4 } from 'uuid';

import GImage from '../assets/symbol.svg';
import fbImage from '../assets/brands-and-logotypes.svg';
const SignUp = () => {

    const context = useContext(UserContext);
    const {state, dispatch} = useContext(UserContext);
    //const {userToUpdate, userToUpdateKey} = state;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uploading, setIsUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    
    

    const imagePicker = async e => {
        try {
            
        const file = e.target.files[0];

        var metaData = {
            contentType: file.type
        }

        let resizedImage = await readAndCompressImage(file, imageConfig)

        const storageRef =  await firebase.storage().ref()

        var uploadTask = storageRef
        .child("images/" + v4())
        .put(resizedImage, metaData)

        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                setIsUploading(true);
                var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        setIsUploading(false);
                        console.log("Uploading Paused")
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log("Upload in progress..");
                        break;;
                }
                
                
                
                if(progress === 100) {
                    alert("Success Uploading Image")
                }
            },
            error => {
                alert("Something went Wrong")
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                .then(imageUrl => {
                    setImageUrl(imageUrl)
                })
                .catch(err => console.log(err))
            }
        )
        

        

        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    const  handleSignup = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        
        .then( res => {
            console.log(res)
            context.setUser({email: res.user.email, uid: res.user.uid, image: imageUrl})
        })
        .catch(error => {
            alert(error)
            console.log(error)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignup()
    }

    // const addProfile = async () => {
    //     try {
    //         firebase.database()
    //         .ref("Profile/" + v4())
    //         .set({
    //             email,
    //             picture: imageUrl
    //         })
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    // const googleSignIn = () => {
    
    //     var provider =  new firebase.auth.GoogleAuthProvider();

    //     firebase.auth().signInWithPopup(provider)
    //     .then((result) => {
    //     context.setUser({uid: result.user.uid})

    //     }).catch(error => {
    //     console.log(error)
    // })
    // }
    // //bug
    // const facebookSignIn = () => {
    //     var provider = new firebase.auth.FacebookAuthProvider();

    //     firebase.auth().signInWithPopup(provider)
    //     .then(result => {
    //         context.setUser({uid: result.user.uid})
    //     }).catch(
    //         error => {
    //             console.log(error)
    //         }
    //     )

    // }

    

    if(context.user?.uid) {
        return <Redirect to="/game-story"/>
    }
    return(
        <>
            <div className="signup-page-title">
                <p>Sign Up</p>
            </div>
            <div className="image-container">
                <div className="void"/>
                <div className="photo">
                    
                        <label className="image-label" htmlFor="userImage">
                            <img src={imageUrl} alt="" className="profu" />
                        </label>
                        <input 
                        className="image-input" 
                        id="userImage" 
                        name="image" 
                        multiple={false}
                        onChange={e => imagePicker(e)}
                        accept="image/*" 
                        type="file"></input>
                   
                </div>
                <div className="void"/>
            </div>
            <div className="container-box">
                {/* <div className="empyt-space" /> */}
                <Form onSubmit={handleSubmit} className="signup-form">
                    <FormGroup>
                        <Label className="form-label" for="userEmail">Email:</Label>
                        <Input 
                        className="form-input" 
                        id="userEmail" 
                        type="email" 
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                        placeholder="johndoe@mail.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="form-label" for="password">Password:</Label>
                        <Input 
                        className="form-input" 
                        type="text" 
                        id="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="donotuse123"/>
                    </FormGroup>
                <div className="button-container">
                    <Button type="submit" className="button-box">
                            <p className="button-text">Sign Up</p>
                    </Button>
                </div>
                </Form>
                
            </div>
            {/* <p className="middle-text">Or Sign In Using</p>    
            <div className="other-methods">
                    <Button  onClick={googleSignIn} id="google" className="button-box"> 
                        <img className="auth-logo" src={GImage} alt="Google" />
                    </Button>
                    <Button onClick={facebookSignIn} className="button-box" id="facebook">
                        <img className="auth-logo" src={fbImage} alt="Facebook" />
                    </Button>
                </div>   */}
        </>

    )
    
}

export default SignUp;
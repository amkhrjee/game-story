import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css'


import firebase from 'firebase/app';
import { UserContext } from '../context/userContext';
import { Redirect } from 'react-router-dom';



const SignIn = () => {

    const context = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  handleSignIn = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then( res => {
            console.log(res)
            context.setUser({email: res.user.email, uid: res.user.uid})
        })
        .catch(error => {
            alert(error)
            console.log(error)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignIn()
    }

    if(context.user?.uid) {
        return <Redirect to="/"/>
    }
    return(
        <>
            <div className="signup-page-title">
                    <p>Sign In</p>
                </div>
                <div className="container-box">
                    <div className="empyt-space" />
                    <Form onSubmit={handleSubmit} className="signup-form">
                        <FormGroup>
                            <Label className="form-label" for="userEmail">Email:</Label>
                            <Input 
                            className="form-input" 
                            id="userEmail" 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="johndoe@mail.com"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="form-label" for="password">Password:</Label>
                            <Input 
                            className="form-input" 
                            type="text" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="password" 
                            placeholder="donotuse123"/>
                        </FormGroup>
                    <div className="button-container">
                        <Button type="submit" className="button-box">
                                <p className="button-text">Sign In</p>
                        </Button>
                    </div>
                    </Form>
                </div>      
        </>
    )
}

export default SignIn; 
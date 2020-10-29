import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import loginAction from '../../actions/login-action';
import employeelistAction from '../../actions/employeelist-action';

import {credentials} from '../../data/login';

import './login.css';

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCredentials, setInvalidCredentials] = useState(null);
    const dispatch = useDispatch();
    var handleOnChangeUserName = (event) => {
        setUserName(event.target.value)
    }

    var handleOnChangePassword = (event) => {
        setPassword(
           event.target.value)
    }

    var handleOnSubmit = () => {
        var data = {
            userName : userName,
            password : password
        }
        console.log("HandleSubmit ");
        console.log(data);
        if(credentials.username === userName && credentials.password === password) {
            loginAction(dispatch, data);
            employeelistAction(dispatch);
        }
        else {
            setInvalidCredentials("Enter the valid username and password");
        }
        
    };

    return(
        <div className="logincontainer">
        <Form className="formwrap" >
            <p className= "loginerrormessage">{invalidCredentials}</p>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Login Id</Form.Label>
                <Form.Control value={userName} required="true" type="email" placeholder="Enter email" onChange = {handleOnChangeUserName} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" placeholder="Password" onChange = {handleOnChangePassword} />
            </Form.Group>
            <Button variant="primary" onClick = {handleOnSubmit}>
                Login
            </Button>
        </Form>
        </div>
    );
}

export default Login;
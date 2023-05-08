import React, { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

import { Link, Route, useHistory, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';

//import './Login.css';
//import { useNavigate } from 'react-router-dom';

 

function Login() {

 

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const navigate = useNavigate();

 

    const handleSubmit = (e) => {

        if (username === 'admin' && password === 'admin123') {

            console.log('Login successful!');

            navigate("/home");

        } else {

            console.log('Invalid username or password');

        }

    };

 

    return (
  <Container>

        <div className="container d-flex align-items-center justify-content-center vh-100">

            <div className="card p-4">

                <h1 className="mb-4">Login</h1>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">

                        <Form.Label> Username:</Form.Label>

                        <Form.Control type="text" required placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label> Password: </Form.Label>

                        <Form.Control type="password" required placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                    </Form.Group>

                    <Button variant='primary' className='d-block mx-auto' type="submit">Login</Button>

                </Form>

            </div>

        </div>
</Container>
    );

};

 

export default Login;
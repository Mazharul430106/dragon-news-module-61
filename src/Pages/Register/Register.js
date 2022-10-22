import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmitFormRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,phUrl,email,password)

        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            form.reset();
            console.log(user);
        })
        .catch((error)=>{
            console.error('error',error);
        })
        
    }

    return (
        <Form onSubmit={handleSubmitFormRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>Ph_Url</Form.Label>
                <Form.Control type="text" name='url' placeholder="Enter url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name='checkbox' label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;
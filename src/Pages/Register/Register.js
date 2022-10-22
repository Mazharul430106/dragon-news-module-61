import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [acepte, setAcepte] = useState(false);

    const handleSubmitFormRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            form.reset();
            setSuccess('Successfully Registerd');
            setError('');
            handleUpdateUserProfile(name, phUrl);
            console.log(user);
        })
        .catch((error)=>{
            console.error('error',error);
            setSuccess('');
            setError(error.message);
        })
    }

    const handleUpdateUserProfile = (name, phUrl)=>{
        const profile = {
            displayName: name,
            photoURL: phUrl 
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=> console.error('error',error))
    }

    const handleAcepted = event => {
        setAcepte(event.target.checked);
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

            <Form.Group className="text-success" controlId="formBasicCheckbox">
                {success}
            </Form.Group>
            <Form.Group className="text-danger" controlId="formBasicCheckbox">
                {error}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={handleAcepted}
                    name='checkbox'
                    label={<> Acepte <Link to='/trams'>Trams and Conditions</Link> </>
                    
                    } />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!acepte}>
                Register
            </Button>
        </Form>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handlerSubmitFromLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        form.reset();
        loginUser(email,password)
        .then((result)=>{
            const user = result.user;
            navigate('/');
            setError('');
            console.log(user)
        })
        .catch((error)=>{
            console.error('error',error)
            setError(error.message)
        })
    }

    return (
        <Form onSubmit={handlerSubmitFromLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            
            <Form.Group className='text-danger'>
                {error}
            </Form.Group>

            {/* <Form.Text className='text-danger'>
              
            </Form.Text> */}

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;
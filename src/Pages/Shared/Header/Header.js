import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch((error) => {
                console.error('error', error);
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className='mb-3' >
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link>
                            <Link className='text-light text-decoration-none' to={'/'}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-light text-decoration-none' to={'/login'}>About</Link>
                        </Nav.Link>

                        {
                            user?.uid ?
                                <>
                                   <Nav.Link className='text-white'>
                                        {user?.displayName}
                                   </Nav.Link>

                                    <Nav.Link>
                                        <Link onClick={handleLogOut} className='text-light text-decoration-none'>Logout</Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link>
                                        <Link className='text-light text-decoration-none' to={'/register'}>Register</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link className='text-light text-decoration-none' to={'/login'}>Login</Link>
                                    </Nav.Link>
                                </>
                        }

                        <Nav.Link className='d-flex align-items-center gap-3'>
                            <div className='d-flex align-items-center'>
                                {
                                    user?.photoURL ?
                                        <Image src={user?.photoURL} roundedCircle style={{ height: '30px' }}></Image>
                                        :
                                        <FaUser></FaUser>
                                }
                            </div>
                        </Nav.Link>
                        
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSidebar></LeftSidebar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
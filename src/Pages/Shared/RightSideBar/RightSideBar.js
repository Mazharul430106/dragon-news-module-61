import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideBar = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = ()=>{
        providerLogin(googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.log('error',error);
        })
    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} className='mb-1' variant="outline-success"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='mb-1' variant="outline-secondary"> <FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>

            <div className='mt-2'>
                <h5>Find Us On</h5>

                <ListGroup>
                    <ListGroup.Item className='mb-1'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-1'> <FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-1'> <FaGoogle></FaGoogle>  Google</ListGroup.Item>
                    <ListGroup.Item className='mb-1'> <FaGithub></FaGithub> Github</ListGroup.Item>
                    <ListGroup.Item className='mb-1'> <FaWhatsapp></FaWhatsapp>  WhatsApp</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideBar;
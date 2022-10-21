import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideBar = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-1' variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
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
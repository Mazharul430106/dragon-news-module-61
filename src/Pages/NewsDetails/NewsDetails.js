import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const NewsDetails = ({ news }) => {
    // console.log(news);

    const { _id, title, rating, image_url, details, author } = news;

    return (
        <Card className='mb-3'>
            <Card.Header>
                <Image src={author.img}
                    roundedCircle
                    style={{height :'60px'}}
                ></Image>

            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length > 200 ? <p>{details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}>Read More</Link></p> : <p>{details}</p> }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
};

export default NewsDetails;
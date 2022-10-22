import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsDetails = ({ news }) => {
    //  console.log(news);

    const { _id, title, rating, image_url, details, author,total_view } = news;

    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <Image src={author.img}
                        roundedCircle
                        style={{height :'60px'}}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p className='mb-0'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-1'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length > 200 ? <p>{details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}>Read More</Link></p> : <p>{details}</p> }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center gap-1'>
                    <FaStar className='text-warning'></FaStar>
                    <span className='mb-0'>{rating.number}</span>
                </div>
                <div className='d-flex align-items-center gap-1'>
                    <FaEye></FaEye>
                    <span>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
    )
};

export default NewsDetails;
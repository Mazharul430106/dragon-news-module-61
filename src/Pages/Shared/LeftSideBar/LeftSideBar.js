import React from 'react';
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories-news')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
            <h4>ALL Category : {categories.length}</h4>
            {
                categories.map(category=> <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link> </p>)
            }
        </div>
    );
};

export default LeftSidebar;
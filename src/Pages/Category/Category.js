import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const Category = () => {
    const categoryData = useLoaderData();

    return (
        <div>

            <h1>Category data :{categoryData.length}</h1>

            {
                categoryData.map(category => <NewsDetails key={category._id} news={category}></NewsDetails>)
            }
        </div>
    );
};

export default Category;
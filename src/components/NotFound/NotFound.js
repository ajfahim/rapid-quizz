import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-white flex flex-col h-full items-center mt-56'>
            <h1 className='text-6xl md:text-8xl font-bold text-yellow-500'>404</h1>
            <p className='mt-5 text-xl'>The page you are looking for is not found !</p>
            <button className='mt-3 bg-green-600 px-5 py-3 rounded-full font-bold'><Link to='/'>Go to Home Page</Link></button>
        </div>
    );
};

export default NotFound;
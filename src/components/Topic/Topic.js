import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div className='text-white flex justify-center md:p-2'>
            <div className='rounded-md border shadow-md shadow-green-300 border-green-600 p-2 mb-10 flex flex-col justify-center items-center w-52'>
                <img className='w-24 h-24 object-cover' src={logo} alt={name} />
                <div className='mt-3'>
                    <p>Topic: {name}</p>
                    <p> <small> Questions: {total}</small></p>
                    <button className=' my-4 px-4 py-2 bg-yellow-400 rounded-sm font-bold'><Link to={`/quiz/${id}`}>Participate</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;
import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <div className='text-white flex justify-center md:p-2'>
            <div className='rounded-md border shadow-md shadow-green-300 border-green-600 p-2 mb-10 flex flex-col justify-center items-center w-52'>
                <img className='w-24 h-24 object-cover' src={logo} alt={name} />
                <div>
                    <p>Topic: {name}</p>
                    <p> <small> Questions: {total}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Topic;
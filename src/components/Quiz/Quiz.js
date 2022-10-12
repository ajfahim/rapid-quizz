import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();

    return (
        <div className='text-white'>
            This is quiz Route: {quiz.data.id}
        </div>
    );
};

export default Quiz;
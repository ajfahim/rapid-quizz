import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();


    return (
        <div className='text-white text-center mx-auto mt-20 grid w-3/4 justify-items-center md:grid-cols-2 lg:grid-cols-4 lg:gap-32 lg:max-w-5xl    '>
            {topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)}
        </div>
    );
};

export default Topics;
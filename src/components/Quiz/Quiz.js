import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;

    return (
        <div className='text-white text-center mt-20'>
            <h3 className='text-xl md:text-3xl lg:text-5xl'>Lets test your knowledge on <span className='text-yellow-400 font-bold text-2xl md:text-5xl lg:text-6xl'>{name}</span></h3>
            <div>
                {
                    questions.map((question) => {

                        return <Questions key={question.id} question={question}></Questions>
                    })
                }
            </div>
        </div>
    );
};

export default Quiz;
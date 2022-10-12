import React from 'react';

const Questions = ({ question }) => {

    return (
        <div className='bg-yellow-400 text-gray-800 rounded-md m-10 font-bold w-[90%] md:w-[70%] lg:w-[60%] grid mx-auto text-lg'>
            <p>{question.question}</p>

            {question.options.map((option, index) => {
                return <div key={index} className="text-left m-2 p-2">
                    <input type="radio" name={question.id} id={option} value={option} />
                    <label htmlFor={option} className="ml-2">{option}</label>

                </div>

            })}


        </div>
    );
};

export default Questions;
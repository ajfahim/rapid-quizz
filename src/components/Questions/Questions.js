import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BiShowAlt } from 'react-icons/bi'
import { toast } from 'react-toastify';

const Questions = ({ question }) => {
    const handleClick = (answer) => {

        if (answer === question.correctAnswer) {
            toast.success('🤯 You are Right', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
        else {
            toast.error('😫 Try Harder', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }


    };
    const handleCorrect = () => {
        toast.success(`${question.correctAnswer}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }
    return (
        <>
            <div className='bg-yellow-400 text-gray-800 rounded-md m-10 font-bold w-[90%] md:w-[70%] lg:w-[60%] grid mx-auto text-lg'>
                <div className='flex justify-center mt-2'>
                    <p className='w-11/12'>{question.question}</p>
                    <BiShowAlt onClick={handleCorrect} className='text-green-800 cursor-pointer ' size={30}></BiShowAlt>
                </div>

                {question.options.map((option, index) => {
                    return <div onChange={() => handleClick(option)} key={index} className="text-left m-2 p-2 w-fit">
                        <input type="radio" name={question.id} id={option} value={option} />
                        <label htmlFor={option} className="ml-2">{option}</label>
                    </div>
                })}
            </div>

        </>
    );
};

export default Questions;
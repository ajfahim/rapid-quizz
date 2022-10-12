import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ question }) => {
    const handleClick = (answer) => {

        if (answer === question.correctAnswer) {
            toast.success('🦄 Correct Answer!!!', {
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
            toast.error('🦄 Sorry Wrong Answer!!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }


    };
    return (
        <>
            <div className='bg-yellow-400 text-gray-800 rounded-md m-10 font-bold w-[90%] md:w-[70%] lg:w-[60%] grid mx-auto text-lg'>
                <p>{question.question}</p>

                {question.options.map((option, index) => {
                    return <div onClick={() => handleClick(option)} key={index} className="text-left m-2 p-2 border w-fit">
                        <input type="radio" name={question.id} id={option} value={option} />
                        <label htmlFor={option} className="ml-2">{option}</label>


                    </div>


                })}


            </div>
            <ToastContainer />
        </>
    );
};

export default Questions;
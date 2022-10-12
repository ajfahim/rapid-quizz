import React from 'react';
import ReactTyped from 'react-typed';

const Header = () => {
    return (
        <div className='text-white mt-40'>
            <h2 className='text-center text-green-500 md:text-5xl sm:text-4xl text-xl md:pb-6 pb-3'>Test your skills with <span className='font-bold'>Rapid Quizzz</span></h2>
            <p className='text-center md:text-5xl sm:text-3xl text-xl'>Test your skills on <ReactTyped className='font-bold text-yellow-400' strings={['JS', 'Git', 'React', 'CSS']} loop typeSpeed={120} backSpeed={140}></ReactTyped></p>
        </div>
    );
};

export default Header;
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
const Nav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
        setNav(!nav)
    }, [])

    return (
        <div className='text-white flex justify-between items-center h-24 px-10 max-w-[1240px] mx-auto'>
            <h1 className='font-bold text-3xl text-green-500'>Rapid Quizz</h1>
            <ul className='hidden  md:flex'>
                <li className='p-3 cursor-pointer'>Topics</li>
                <li className='p-3 cursor-pointer'>Statistics</li>
                <li className='p-3 cursor-pointer'>Blog</li>
            </ul>

            {/* Mobile menu  */}
            <div className='cursor-pointer block md:hidden' onClick={handleNav}>
                {!nav ? <AiOutlineClose size={40} /> : <BiMenuAltRight size={40} />}

            </div>
            <div className={!nav ? 'fixed top-0 left-0 border-r border-gray-800 w-[50%] h-full bg-[#000300] pt-4 ease-in-out duration-300 md:hidden ' : 'fixed left-[-100%] ease-in-out duration-300'}>
                <h1 className='font-bold text-3xl text-green-500 ml-5 pt-3'>Rapid Quizz</h1>
                <ul className='uppercase p-4'>
                    <li className='border-b border-gray-600 p-3 cursor-pointer'>Topics</li>
                    <li className='border-b border-gray-600 p-3 cursor-pointer'>Statistics</li>
                    <li className=' p-3 cursor-pointer'>Blog</li>
                </ul>
            </div>
        </div>

    );
};

export default Nav;
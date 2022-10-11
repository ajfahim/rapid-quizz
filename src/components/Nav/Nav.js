import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
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
            <Link to='/'> <h1 className='font-bold text-3xl text-green-500'>Rapid Quizz</h1></Link>
            <ul className='hidden  md:flex'>
                <Link to="/">    <li className='p-3 cursor-pointer'>Topics</li></Link>
                <Link to="statistics">  <li className='p-3 cursor-pointer'>Statistics</li></Link>
                <Link to="blog"><li className='p-3 cursor-pointer'>Blog</li></Link>



            </ul>

            {/* Mobile menu  */}
            <div className='cursor-pointer block md:hidden' onClick={handleNav}>
                {!nav ? <AiOutlineClose size={40} /> : <BiMenuAltRight size={40} />}

            </div>
            <div className={!nav ? 'fixed top-0 left-0 border-r border-gray-800 w-[50%] h-full bg-[#000300] pt-4 ease-in-out duration-300 md:hidden ' : 'fixed left-[-100%] ease-in-out duration-300'}>
                <Link to="/"> <h1 className='font-bold text-3xl text-green-500 ml-5 pt-3'>Rapid Quizz</h1></Link>
                <ul className='uppercase p-4'>
                    <Link onClick={handleNav} to="/"> <li className='border-b border-gray-600 p-3 cursor-pointer'>Topics</li></Link>
                    <Link onClick={handleNav} to="statistics"><li className='border-b border-gray-600 p-3 cursor-pointer'>Statistics</li></Link>
                    <Link onClick={handleNav} to="blog"> <li className=' p-3 cursor-pointer'>Blog</li></Link>
                </ul>
            </div>
        </div>

    );
};

export default Nav;
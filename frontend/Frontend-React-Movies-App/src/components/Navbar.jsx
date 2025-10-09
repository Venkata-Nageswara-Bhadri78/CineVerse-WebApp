import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderItems from './HeaderItems';

import { SiThemoviedatabase } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiMovieAiFill } from "react-icons/ri";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <div className='md:hidden'>
                <div className='flex justify-between items-center p-4 bg-blue-500 text-white'>
                    <div onClick={() => {setShowMenu(!showMenu)}} className=''><GiHamburgerMenu /></div>
                    <Link to="/">
                        <div className='flex w-full text-xl md:text-2xl items-center gap-2 text-white'>
                            <div className='bg-white shadow-lg rounded-full p-2 text-black'><SiThemoviedatabase size={35}/></div>
                            <div className='flex items-center gap-2 bg-white px-4 shadow-lg py-2 text-black rounded-full'>Cine <RiMovieAiFill /> Verse</div>
                        </div>
                    </Link>
                </div>
                {showMenu ? <HeaderItems showMenu={showMenu} setShowMenu={setShowMenu} /> : ''}
            </div>
            <div className='md:block hidden'>                
                <HeaderItems showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
        </div>
    )
}

export default Navbar
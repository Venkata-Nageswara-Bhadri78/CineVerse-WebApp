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
                <div className='flex justify-between items-center p-4 bg-slate-400 text-white'>
                    <div onClick={() => {setShowMenu(!showMenu)}} className=''><GiHamburgerMenu size={25} /></div>
                    <Link to="/">
                        <div className='flex w-full items-center gap-2'>
                            <div className='flex items-center gap-2 bg-white px-2 shadow-lg py-1.5 text-black rounded-full'><RiMovieAiFill size={22} /> Cine Verse</div>
                        </div>
                    </Link>
                </div>
                {showMenu && <HeaderItems showMenu={showMenu} />}
            </div>
            <div className='md:block hidden'>                
                <HeaderItems showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
        </div>
    )
}

export default Navbar
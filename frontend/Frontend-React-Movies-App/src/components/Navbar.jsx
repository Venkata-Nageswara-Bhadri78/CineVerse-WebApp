import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderItems from './HeaderItems';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <div className='md:hidden'>
                <div className='flex justify-between items-center p-4 bg-blue-500 text-white'>
                    <div onClick={() => {setShowMenu(!showMenu)}} className=''><GiHamburgerMenu /></div>
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
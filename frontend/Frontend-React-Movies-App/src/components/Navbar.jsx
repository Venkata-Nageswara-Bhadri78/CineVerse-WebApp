import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderItems from './HeaderItems';

import { Link } from 'react-router-dom';
import { RiMovieAiFill } from "react-icons/ri";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            {/* For Mobile */}
            <div className='md:hidden'>
                <div className='flex justify-between items-center p-4 bg-slate-400/70 backdrop-blur-md border-b border-white/30 text-white shadow-sm'>
                    <div onClick={() => setShowMenu(true)} className='cursor-pointer bg-white/20 p-2 rounded-lg backdrop-blur-sm border border-white/30'>
                        <GiHamburgerMenu size={22} />
                    </div>
                    <Link to="/">
                        <div className='flex w-full items-center gap-2'>
                            <div className='flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 shadow-sm border border-white/40 py-1.5 text-black rounded-full font-bold'>
                                <RiMovieAiFill size={22} className="text-blue-600" /> Cine Verse
                            </div>
                        </div>
                    </Link>
                </div>
                
                {/* Mobile Glassmorphism Sidebar */}
                {showMenu && (
                    <div className="fixed inset-0 z-[100] flex">
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
                            onClick={() => setShowMenu(false)}
                        ></div>
                        
                        {/* Side Panel */}
                        <div className="relative z-50 w-64 h-full bg-slate-200/80 backdrop-blur-xl border-r border-white/50 shadow-[4px_0_24px_rgba(0,0,0,0.15)] transform transition-transform duration-300 ease-in-out">
                            {/* Close Button */}
                            <div className="p-4 flex justify-end">
                                <button 
                                    onClick={() => setShowMenu(false)}
                                    className="text-black bg-white/50 hover:bg-white/80 backdrop-blur-md p-2 rounded-full border border-white/40 transition-colors font-bold"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Branding */}
                            <div className="px-6 pb-6 flex items-center gap-3 border-b border-slate-300/50">
                                <RiMovieAiFill size={28} className="text-blue-600 drop-shadow-sm" /> 
                                <span className="text-xl font-bold text-slate-800 tracking-widest drop-shadow-sm">Cine Verse</span>
                            </div>

                            {/* Menu Items */}
                            <div className="p-4">
                                <HeaderItems showMenu={showMenu} setShowMenu={setShowMenu} isMobile={true} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* For Desktop */}
            <div className='md:block hidden relative'>                
                <HeaderItems showMenu={showMenu} setShowMenu={setShowMenu} isMobile={false} />
            </div>
        </div>
    )
}

export default Navbar
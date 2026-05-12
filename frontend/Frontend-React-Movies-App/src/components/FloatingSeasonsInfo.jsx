import React, { useEffect, useRef } from 'react'
import SeasonCard from './SeasonCard';
import { MdClose } from "react-icons/md";

const FloatingSeasonsInfo = ({ data, onClose }) => {
    const scrollRef = useRef(null);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!Array.isArray(data) || data.length === 0) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in"
            onClick={onClose}
        >
            {/* Header / Close Button */}
            <div className="absolute top-6 right-6 z-[110]">
                <button 
                    onClick={onClose}
                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-white shadow-2xl transition-all active:scale-90"
                >
                    <MdClose size={28} />
                </button>
            </div>

            <div className='w-full px-4 mb-8 text-center'>
                <h2 className='text-3xl font-black text-white tracking-tight drop-shadow-lg uppercase'>All Seasons</h2>
                <p className='text-gray-300 text-sm mt-1'>Swipe to explore</p>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
                ref={scrollRef}
                className="w-full flex overflow-x-auto gap-8 px-[10%] py-12 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()}
            >
                {data.map((season) => (
                    <div 
                        key={season.id} 
                        className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] snap-center transition-all duration-500 hover:scale-105"
                    >
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 h-full flex flex-col min-h-[400px]">
                            <SeasonCard season={season} />
                        </div>
                    </div>
                ))}

            </div>

            {/* Bottom Indicator */}
            <div className='flex gap-2 mt-8'>
                {data.map((_, i) => (
                    <div key={i} className='w-1.5 h-1.5 rounded-full bg-white/20'></div>
                ))}
            </div>
        </div>
    )
}

export default FloatingSeasonsInfo;
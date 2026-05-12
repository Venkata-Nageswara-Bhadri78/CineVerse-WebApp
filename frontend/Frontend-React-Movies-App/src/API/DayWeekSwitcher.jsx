import React from "react";

const DayWeekSwitcher = ({ selected, setSelected }) => {
  return (
    <div className="flex items-center justify-center p-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md overflow-hidden transition-all duration-300">
      <div className="relative flex w-28 h-7 md:w-32 md:h-8">
        {/* Animated Background Slider */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full transition-all duration-500 ease-out shadow-inner ${
            selected === "day" 
              ? "translate-x-0 bg-gradient-to-r from-cyan-500 to-blue-500" 
              : "translate-x-full bg-gradient-to-r from-purple-500 to-pink-500"
          }`}
        />
        
        {/* Day Button */}
        <button
          onClick={() => setSelected("day")}
          className={`relative z-10 flex-1 flex items-center justify-center text-[10px] md:text-xs font-bold transition-colors duration-300 ${
            selected === "day" ? "text-white" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Day
        </button>
        
        {/* Week Button */}
        <button
          onClick={() => setSelected("week")}
          className={`relative z-10 flex-1 flex items-center justify-center text-[10px] md:text-xs font-bold transition-colors duration-300 ${
            selected === "week" ? "text-white" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Week
        </button>
      </div>
    </div>
  );
};


export default DayWeekSwitcher;


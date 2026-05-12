import * as React from 'react';

export default function ChoiceSelector({ selectChoice, setSelectChoice, isTopRated }) {
  const options = [
    { value: 'movie', label: 'Movies' },
    { value: 'tv', label: 'TV Shows' },
    ...(!isTopRated ? [{ value: 'person', label: 'People' }] : []),
  ];

  return (
    <div className="flex gap-1 p-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-full shadow-sm overflow-x-auto no-scrollbar">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setSelectChoice(option.value)}
          className={`px-2 py-1 md:px-3 md:py-1 rounded-md md:rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap transition-all duration-300 transform active:scale-95 ${
            selectChoice === option.value
              ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md ring-1 ring-indigo-300/30"
              : "text-gray-600 hover:bg-white/20 hover:text-indigo-600"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}



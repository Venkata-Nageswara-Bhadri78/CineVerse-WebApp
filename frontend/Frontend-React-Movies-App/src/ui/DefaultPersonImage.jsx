import React from 'react'

const DefaultPersonImage = ({name}) => {

    const letter = name ? name.substring(0, 1).toUpperCase() : '$';
    const bgColor = color[letter] || 'rgba(100, 100, 100, 0.6)';
  return (
    <div style={{ backgroundColor: bgColor }} className={`text-[50px] font-extrabold flex flex-col gap-2 justify-center items-center min-h-60 rounded-t-lg`}>
        <div className='bg-white h-15 w-15 shadow-2xl rounded-full flex justify-center items-center'>
            {letter}
        </div>
        <div className='text-xs font-normal'>
            No Image Available
        </div>
    </div>
  )
}

export default DefaultPersonImage



var color = {
    "A": "rgba(255, 0, 0, 0.8)",      // Red
    "B": "rgba(0, 128, 0, 0.8)",      // Green
    "C": "rgba(0, 0, 255, 0.8)",      // Blue
    "D": "rgba(255, 165, 0, 0.8)",    // Orange
    "E": "rgba(128, 0, 128, 0.8)",    // Purple
    "F": "rgba(255, 192, 203, 0.8)",  // Pink
    "G": "rgba(0, 255, 255, 0.8)",    // Cyan
    "H": "rgba(128, 128, 0, 0.8)",    // Olive
    "I": "rgba(255, 0, 255, 0.8)",    // Magenta
    "J": "rgba(0, 128, 128, 0.8)",    // Teal
    "K": "rgba(255, 215, 0, 0.8)",    // Gold
    "L": "rgba(173, 216, 10, 0.8)",  // Light Blue
    "M": "rgba(210, 105, 30, 0.8)",   // Chocolate
    "N": "rgba(75, 0, 130, 0.8)",     // Indigo
    "O": "rgba(240, 128, 128, 0.8)",  // Light Coral
    "P": "rgba(34, 139, 34, 0.8)",    // Forest Green
    "Q": "rgba(70, 130, 180, 0.8)",   // Steel Blue
    "R": "rgba(255, 69, 0, 0.8)",     // Orange Red
    "S": "rgba(138, 43, 226, 0.8)",   // Blue Violet
    "T": "rgba(60, 179, 113, 0.8)",   // Medium Sea Green
    "U": "rgba(0, 191, 255, 0.8)",    // Deep Sky Blue
    "V": "rgba(255, 20, 147, 0.8)",   // Deep Pink
    "W": "rgba(218, 165, 32, 0.8)",   // Goldenrod
    "X": "rgba(147, 112, 219, 0.8)",  // Medium Purple
    "Y": "rgba(32, 178, 170, 0.8)",   // Light Sea Green
    "Z": "rgba(199, 21, 133, 0.8)"    // Medium Violet Red
  };
  
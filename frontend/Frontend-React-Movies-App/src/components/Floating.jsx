import React, { useState } from "react";

const Floating = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative">
      {/* Button to toggle */}
      <button
        onClick={() => setShowInfo(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Show Info
      </button>

      {/* Floating Info Box */}
      {showInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
            <h2 className="text-lg font-bold mb-2">Extra Information</h2>
            <p className="text-gray-700">
              This is the floating information you wanted to show.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowInfo(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Floating;

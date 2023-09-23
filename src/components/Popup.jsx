import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-pink-500 p-6 rounded shadow-lg">
        <div>
            <div>Activity Type:</div>
            <div>Activity Name:</div>
            <div>Date:</div>
            <div>Duration:</div>
            <div>Activity Description:</div>
            
        </div>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
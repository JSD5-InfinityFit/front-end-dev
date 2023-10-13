import React from 'react';

const Popup = ({ ActivityData }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="p-6 bg-pink-500 rounded shadow-lg">
        <div>
            <div>Activity Type: {ActivityData.type}</div>
            <div>Activity Name: {ActivityData.name}</div>
            <div>Date: {ActivityData.date}</div>
            <div>Duration: {ActivityData.duration} minutes</div>
            <div>Activity Description: {ActivityData.description}</div>
        </div>
        <button onClick={onClose} className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
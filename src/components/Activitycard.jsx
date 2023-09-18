import React, { useState } from 'react';

function CardActivity() {
  const [formData, setFormData] = useState({
    activeName: '',
    activeType: '',
    date: '',
    duration: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {

    console.log(formData);
  };

  const handleDeleteClick = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this activity?');

    if (shouldDelete) {
      
    }
  };

  return (
    <div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
      <label>Active Name</label>
      <input
        type='text'
        name='activeName'
        value={formData.activeName}
        onChange={handleInputChange}
      />

      <label >Active Type</label>
      <input
        type='dropdown'
        name='activeType'
        value={formData.activeType}
        onChange={handleInputChange}
      />

      <label>Date</label>
      <input
        type='date'
        name='date'
        value={formData.date}
        onChange={handleInputChange}
      />

      <label>Duration</label>
      <input
        type='text'
        name='duration'
        value={formData.duration}
        onChange={handleInputChange}
      />

      <label>Description</label>
      <textarea
        name='description'
        value={formData.description}
        onChange={handleInputChange}
      />
  
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
    
  );
}

export default CardActivity;

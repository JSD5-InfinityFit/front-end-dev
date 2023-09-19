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
    <div class="m-36">
      <form class="flex flex-col">
      <div class="h-46" >
      <label class="	base-100 w-14 p-4 rounded-md" >Active Name</label>
      <input class="border-2"
        type='text'
        placeholder='Enter Name'
        name='activeName'
        value={formData.activeName}
        onChange={handleInputChange}
      /></div>

      <div class="h-46" >
      <label class="	bg-success-content w-14 p-4 rounded-md">Active Type</label>
      <input class="border-2"
        type='dropdown'
        placeholder='Selected Type'
        name='activeType'
        value={formData.activeType}
        onChange={handleInputChange}
      /></div>

      <div class="flex flex-col">
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
      /></div>

      <label>Description</label>
      <textarea
        name='description'
        value={formData.description}
        onChange={handleInputChange}
      />
  
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleDeleteClick}>Delete</button>
     </form>
      </div>
  
  );
}

export default CardActivity;

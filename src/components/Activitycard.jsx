import React, { useEffect, useState } from 'react';
import './Activitycard.css' 
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Navbar from '../components/Navbar'
import NavbarDT from '../components/NavbarDT';


function CardActivity() {
  const [formData, setFormData] = useState({
    activeName: '',
    activeType: '',
    date: '',
    duration: '',
    description: '',
  });

  //////////////////////////////////////////////////////////////////

  const { id } = useParams();

useEffect(() => {
  const fetchActivityData = async () => {
    try {
      const res = await fetch(`/api/activities/${id}`);
      if (res.ok) {
        const data = await res.json();
        setFormData(data);
      } else {
        console.error('Failed to fetch activity data');
      }
    } catch (error) {
      console.error('Error fetching activity data:', error);
    }
  };

  fetchActivityData();
}, [id]);


  ////////////////////////// handle //////////////////////////////////////
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
  <Layout>
    <>
    {/* <Navbar /> */}
    <div class="m-36">
      <form class="flex flex-col">
      <div class="bg-gray-100 w-3/5 rounded-md shadow-lg">
      <div class="h-46" >
        
      <label class="bg-violet-800 w-14 p-4 rounded-md" >Active Name</label>
      <input class="border-2"
        type='text'
        placeholder='Enter Name'
        name='activeName'
        value={formData.activeName}
        onChange={handleInputChange}
      /></div>

      <div class="h-46" >
      <label class="	bg-violet-800 w-14 p-4 rounded-md">Active Type</label>
      <input class="border-2"
        type='dropdown'
        placeholder='Selected Type'
        name='activeType'
        value={formData.activeType}
        onChange={handleInputChange}
      /></div>

      
      <div class="flex flex-row">
      <label>Date</label>
      <input
        type='date'
        name='date'
        value={formData.date}
        onChange={handleInputChange}
      /></div>

      <div class="flex flex-row">
      <label>Duration</label>
      <input
        type='text'
        name='duration'
        value={formData.duration}
        onChange={handleInputChange}
      /></div>
      </div>

      
      <label>Description</label>
      <textarea class="w-5/6 shadow-lg h-52"
        name='description'
        value={formData.description}
        onChange={handleInputChange}
      />
       <div className="relative left-20 buttom-20">
      <button className="btn btn-outline btn-success absolute right-20  " onClick={handleSaveClick}>Save</button>
      <button className="btn btn-error absolute right-20 bottom-0.5"onClick={handleDeleteClick}>Delete</button>
      </div> 
    </form>
  </div>
  
  </> 
  </Layout>
  );
}

export default CardActivity;

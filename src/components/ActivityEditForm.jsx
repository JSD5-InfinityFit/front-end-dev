import React from "react";

const ActivityEditForm = ({
  activityData,
  handleInputChange,
  handleSaveClick,
  handleDeleteClick,
  setIsEditing,
}) => {
  return (
    <div className="m-36">
      <form className="flex flex-col" onSubmit={handleSaveClick}>
        <div className="w-3/5 bg-gray-100 rounded-md shadow-lg">
          <div className="h-46">
            <label className="p-4 rounded-md bg-violet-800 w-14">
              Active Name
            </label>
            <input
              className="border-2"
              type="text"
              placeholder="Enter Name"
              name="name"
              value={activityData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="h-46">
            <label className="p-4 rounded-md bg-violet-800 w-14">
              Active Type
            </label>
            <input
              className="border-2"
              type="dropdown"
              placeholder="Selected Type"
              name="type"
              value={activityData.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={activityData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={activityData.duration}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <label>Description</label>
        <textarea
          className="w-5/6 shadow-lg h-52"
          name="description"
          value={activityData.description}
          onChange={handleInputChange}
        />
      </form>
      <div className="flex justify-start left-20 buttom-20">
        <button
          className="mt-4 btn-primary"
          type="submit"
        >
          Save
        </button>
        <button
          className="mt-4 btn-error"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button 
          className="mt-4 btn-accent"
          onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActivityEditForm;

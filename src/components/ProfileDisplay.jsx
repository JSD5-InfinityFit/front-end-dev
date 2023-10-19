



const ProfileDisplay = ({ setChange, information }) => {
    // Check if the 'information' prop is defined
    // if (!information) {
    //   return 
    // }
  
    return (
      <div className="main-profile">
        <div className="information">
          <div className="profile-item">
            <span className="item-label">Name:</span>
            <span className="item-value">{information.Name}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Gender:</span>
            <span className="item-value">{information.Gender}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Birthdate:</span>
            <span className="item-value">{information.Birthdate}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Height:</span>
            <span className="item-value">{information.Height}</span>
          </div>
          <div className="profile-item">
            <span className="item-label">Weight:</span>
            <span className="item-value">{information.Weight}</span>
          </div>
        </div>
  
        <button className="mt-4 btn-primary w-[100px]" onClick={() => setChange(false)}>
          Edit
        </button>
      </div>
    );
  };
  
  export default ProfileDisplay;
  
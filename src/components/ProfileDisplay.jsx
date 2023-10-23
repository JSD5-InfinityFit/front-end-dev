import './ProfileDisplay.css'
const ProfileDisplay = ({ setChange, information }) => {
 
  return (
    <div className="main-profile-2">
      <section className='card items-center mt-16 mb-16 '>
        <div className="information-2  w-2/5 grid gap-4  p-5">
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

        <div id="button" className="flex m-5 justify-around w-3/6">
      <button className="mt-4 btn-primary w-[100px]" onClick={() => setChange(false)}>
          Edit
        </button>
        <button className="mt-4 btn-error w-[100px]" >
          Logout
        </button>
        </div>
        
      </section>


      
       
      </div>
   

  );
};

export default ProfileDisplay;



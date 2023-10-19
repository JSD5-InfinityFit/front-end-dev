import { useState, useEffect } from 'react';
import Layout from '../Layout.jsx';
import ProfileEdit from '../components/ProfileEdit.jsx';
import ProfileDisplay from '../components/ProfileDisplay.jsx';
import axios from 'axios';

const Profile = () => {
    const [information, setInformation] = useState({
        Name: '',
        Gender: '',
        Birthdate: '',
        Height: '',
        Weight: '',
        userID: "652c9f1191bb79b4c6326966",
      });
      const  id  = information.userID;
      useEffect(() => {
        fetchInformation();
      });

      const fetchInformation = async () => {
        
       await axios.get(`https://infinity-fit-backend.onrender.com/users/${id}`)
         .then((res) => {
           setInformation(res.data);
           console.log(res.data)
           if(information) {
             console.log(information)
           }
         })
         .catch((err) => {
           console.log(err);
         });
     };
    const [ change , setChange] = useState(true)
    let component = <ProfileDisplay setChange={setChange} information={information} />  
    if(!change) component =  <ProfileEdit setChange={setChange} setInformation={setInformation} information={information}/>
  return (
    <Layout>
     {component}
    </Layout>
  )
}

export default Profile;
import './welcome-page.css'
import {Link} from 'react-router-dom'
import infty from '../assets/Infinity-Symbol.png'

function WelcomePage() {
    return (
    <>
      <div className='login'>
        <Link to ='./home' className='link'>
          <h2>Login</h2>
        </Link>
      </div>    

      <div  className='center'>

        <div className='welcome'>
          <img src={infty}></img>
          <h1>INFINITY FIT</h1>
        </div>
        <div className='register'>
          <Link to ='../register' className='link'  >
            <h1>GET STARTED</h1>
          </Link>

        </div>    
      </div>
    </>
    
    );
  }
  
  export default WelcomePage;
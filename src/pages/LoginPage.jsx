
import { useState } from "react";


function LoginPage() {
  const [email, setEmail] = useState();
  const [error, setError] = useState('')
  const [password, setPassword] = useState();

  
  
  return (
    <div>
      <h1>Login</h1>
      <label>Email :</label>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <br></br>
      <label >Password :</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <br></br>
      <button onClick={()=> {signInWithEmailAndPassword(auth, email, password).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
			setError(error.message)
          console.log(errorCode)
          console.log(errorMessage)

        });
      
      }}>Login</button>

		<span className="error">{error}</span>
      
    </div>



  );
  }

export default LoginPage;
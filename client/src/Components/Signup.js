import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signup({updateUser}){ 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    let navigate = useNavigate();
    
  function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName, 
        last_name: lastName,
        username: username,
        password: password
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
         updateUser(user)
    });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function onClick(e){
    e.preventDefault()
    navigate(`/login`)
  }

return (
    <div className='form-container'>
        <form onSubmit={onSubmit}>
            <label> First Name </label>
            <input
              className='form-container-input' 
              type="text" 
              name="first_name" 
              id="first_name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
            <label> Last Name </label>
            <input 
              className='form-container-input'
              type="text"
              name="last_name"
              id="last_name"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
            <label> UserName </label>
            <input 
              className='form-container-input'
              type="text"
              name="username" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <label> Password </label>
            <input
              className='form-container-input' 
              type="text" 
              name="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <input type='submit' value='Sign up!' />

        </form>
        {errors? <div className='errors'>{errors} </div>:null}
        <div> Already have an account? </div>
            <label>{isLoading ? "Loading..." : null }</label>
            <button onClick={onClick}> Log in! </button>
    </div>

    // return(
    //    <div>
    //     Signup
    //    </div>
    )
}
export default Signup
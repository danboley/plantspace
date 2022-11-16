import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signup({updateUser}){ 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();
    
  function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
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
      if (r.ok) {
        r.json().then((user) => {
         updateUser(user)
         navigate(`/users/${user.id}`)
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
    <>
        <form onSubmit={onSubmit}>
            <label> First Name </label>
            <input 
              type="text" 
              name="first_name" 
              id="first_name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
            <label> Last Name </label>
            <input 
              type="text"
              name="last_name"
              id="last_name"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
            <label> UserName </label>
            <input 
              type="text"
              name="username" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <label> Password </label>
            <input 
              type="text" 
              name="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <input type='submit' value='Sign up!' />
            <label> Already have an account? </label>
            <button onClick={onClick}> Log in! </button>
        </form>
        {errors? <div>{errors}</div>:null} 
    </>

    // return(
    //    <div>
    //     Signup
    //    </div>
    )
}
export default Signup
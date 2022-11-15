import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        const user = {
            firstName, 
            lastName, 
            username,
            password
        }

        fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(r => {
            if(r.ok){
                r.json().then(user => {
                    navigate(`/users/${user.id}`)
                })
            } else {
                r.json().then(json => setErrors(json.errors))
            }
        })
    }

    function onClick(e){
        e.preventDefault()
        navigate(`/signup`)
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
                <input type='submit' value='Log in!' />
                <button onClick = {onClick}> Sign up!</button>
            </form>
            {errors? <div>{errors}</div>:null} 
        </>
    )
 }
export default Login;
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login ({updateUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        const user = { 
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
                    updateUser(user)
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
                <label> New user? </label>
                <button onClick = {onClick}> Sign up!</button>
            </form>
            {errors? <div>{errors}</div>:null} 
        </>
    )
 }
export default Login;
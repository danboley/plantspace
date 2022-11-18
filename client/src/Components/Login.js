import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login ({updateUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    let navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        setIsLoading(true)
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
            setIsLoading(false)
            if(r.ok){
                r.json().then(user => {
                    navigate(`/`)
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
        <div className='form-container'>
            <form 
                className='trueForm'
                onSubmit={onSubmit}>
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
                  type="password" 
                  name="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button className='buttonPretty' type='submit' value='Log in!'>Log In!</button>
                
            </form>
            {errors? <div className='errors'>{errors}</div>:null} 
            <div>{isLoading ? "Loading..." : null }</div>
            <div> Are You a New user? </div>
                <button className='buttonPretty' onClick = {onClick}> Sign up!</button>
        </div>
    )
 }
export default Login;
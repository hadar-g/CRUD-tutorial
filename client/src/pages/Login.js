import React, {useState} from 'react'
import axios from 'axios'
import './Login.css'



function Login() {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const login = () => {
        const data = {username: userName, password: password}
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if(response.data.error){
                alert(response.data.error)
            }else{
                sessionStorage.setItem("accessToken", response.data)
            }
        })
    }
    return (
        <div className = "loginContainer">
            <label>Username:</label>
            <input 
                type = "text"
                onChange={(event) => {
                    setUserName(event.target.value)
                }}/>

            <label>Password:</label>
            <input 
                type = "password"
                onChange = {(event) => {
                    setPassword(event.target.value)
                }} />

            <button onClick = {login}> Login</button>
        </div>
    )
}

export default Login

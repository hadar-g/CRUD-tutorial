import React, {useState} from 'react'
import axios from 'axios'



function Login() {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const login = () => {
        const data = {username: userName, password: password}
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            console.log(response.data)
        })
    }
    return (
        <div>
            <input 
                type = "text"
                onChange={(event) => {
                    setUserName(event.target.value)
                }}/>
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

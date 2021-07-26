import React, {useState,useEffect} from 'react'
import './Home.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Home() {

let history = useHistory()
    
const[listOfPosts, setListOfPosts] = useState([])

useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
    setListOfPosts(response.data)
    })
}, [])


    return (
        <div>
            
        {listOfPosts.map((value, key) => {
           // key = value.id
            return(
                <div className = "post" onClick = {() => {
                    history.push(`/post/${value.id}`)}}>
                        
                    <div className = "title">
                        {value.title}
                    </div>
                    <div className = "body">
                        {value.postText}
                    </div>
                     <div className = "footer">
                        {value.username}
                    </div>
                </div>
                 ) 
        })}
        </div>
    )
}

export default Home

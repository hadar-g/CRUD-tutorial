import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Post() {
    let {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost3001/posts.byId/${id}`)
    },[])
    return (
        
        <div>
            {id}
        </div>
    )
}

export default Post

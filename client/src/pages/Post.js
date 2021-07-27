import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './Posts.css'

function Post() {
    let {id} = useParams()
    const [postObject, setPostObject] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byid/${id}`).then( (response)=> {
            setPostObject(response.data)
        })

        axios.get(`http://localhost:3001/comments/${id}`).then( (response) => {
            setComments(response.data)
        })
        
    },[id])

    const addComment = () => {
        axios.post("http://localhost:3001/comments", 
        {commentBody: newComment , 
        PostId: id}).then((response) => {
            console.log("comment added!")
        })
    }

    return (
        
        <div className = "postPage">
            <div className = "leftSide">
                <div className = "post" id="individual">
                    <div className = "title">{postObject.title}</div>
                    <div className = "body">{postObject.postText}</div>
                    < div className = "footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className = 'addCommentContainer'>
                    <input 
                        type = "text" 
                        placeholder = "Comment..." 
                        autoComplete = "off"
                        onChange={(event) =>{setNewComment(event.target.value)}}/>
                    <button onClick = {addComment}>Add Comment</button>
                   
                </div>
                <div className = 'listOfComments'>
                        {comments.map((comment, key) => {
                            return( <div  key = {key} className = "comment">
                                {comment.commentBody}
                            </div>)
                        })}
                </div>
            </div>

        </div>
    )
}

export default Post

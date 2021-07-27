import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './CreatePost.css'
import * as Yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("must input a title"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
        history.push('/')
    })
    }

    let history = useHistory()
    //initialValues={} oCSubmit={} validationSchema={}
    return (
        <div className = "createPostPage"> 
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className = "formContainer"> 
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreateTitle" 
                        name ="title" 
                        placeholder="title goes here..."/> 
                    <label>Post Text:</label>
                    <ErrorMessage name="postText" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreatePost" 
                        name ="postText" 
                        placeholder="Post..."/> 
                    <label>Username:</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreateName" 
                        name ="username" 
                        placeholder="user..."/>
                <button type = "submit">Create Post</button> 
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost

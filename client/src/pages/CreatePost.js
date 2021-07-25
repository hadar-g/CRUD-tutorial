import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './CreatePost.css'

function CreatePost() {
    //initialValues={} onSubmit={} validationSchema={}
    return (
        <div >
            <Formik >
                <Form>
                    <label>Title:</label>
                    <Field 
                        id="inputCreatePost" 
                        name ="title" 
                        placeholder="title goes here..."/>
                    <label>Post Text:</label>
                    <Field 
                        id="inputCreatePost" 
                        name ="postText" 
                        placeholder="Post..."/>
                    <label>Username:</label>
                    <Field 
                        id="inputCreatePost" 
                        name ="username" 
                        placeholder="user..."/>
                <button type = "submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost

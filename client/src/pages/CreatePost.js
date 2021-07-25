import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './CreatePost.css'
import * as Yup from 'yup'

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
        console.log(data)
    }
    //initialValues={} onSubmit={} validationSchema={}
    return (
        <div className = "createPostPage"> 
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className = "formContainer"> 
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field 
                        autocomplete ="off"
                        id="inputCreateTitle" 
                        name ="title" 
                        placeholder="title goes here..."/> 
                    <label>Post Text:</label>
                    <ErrorMessage name="postText" component="span"/>
                    <Field 
                        autocomplete ="off"
                        id="inputCreatePost" 
                        name ="postText" 
                        placeholder="Post..."/> 
                    <label>Username:</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        autocomplete ="off"
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

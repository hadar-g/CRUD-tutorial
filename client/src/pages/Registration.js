import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './CreatePost.css'
import axios from 'axios'
//import {useHistory} from 'react-router-dom'

function Registration() {
    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("must input a title"),
        password: Yup.string().min(4).max(20).required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data)
        })
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className = "formContainer"> 
                    <label>Username:</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreateUser" 
                        name ="username" 
                        placeholder="your username..."/> 
                    <label>Password:</label>
                    <ErrorMessage name="password" component="span"/>
                    <Field 
                        autoComplete ="off"
                        id="inputCreatePassword" 
                        name ="password" 
                        placeholder="your password..."
                        type = "password"/> 
                <button type = "submit">Register New User</button> 
                </Form>
            </Formik>
        </div>
    )
}

export default Registration

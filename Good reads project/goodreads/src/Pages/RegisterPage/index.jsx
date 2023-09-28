import React, { useState } from 'react';
import { Link } from "react-router-dom"
import styles from './style.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from "axios";


const RegisterPage = () => {
    const [ requestResponse, setRequestResponse ] = useState({
        textMessage: '',
        alertClass : ''
    })

    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: ''
    }

    const onSubmit = (values) => {
        //console.log(values)
        axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/register', values)
        .then((response) => {
            console.log(response.data)
            setRequestResponse({
                textMessage: response.data.message,
                alertClass: 'alert alert-success'
            })
        }, (error) => {
            console.log(error)
            setRequestResponse({
                textMessage: error.response.data.message,
                alertClass: 'alert alert-danger'
            })
        })
        .catch(error => console.log(error))
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('first name is required'),
        email: Yup.string().required('email is required').email('email should be a valid email'),
        mobile: Yup.string().required('mobile is required'),
        password: Yup.string().required('password is required').min(6, 'password must be 6 character long')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className={styles.wrapper}>
                    <div className={ requestResponse.alertClass }>
                { requestResponse.textMessage }
            </div>
                        <h2>Register</h2>
                        <hr />

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName"
                                    values={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} id="firstName"
                                    className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'} />
                                {formik.errors.firstName && formik.touched.firstName ? (<small className="text-danger">{formik.errors.firstName}</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email"
                                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                                    values={formik.values.email}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? (<small className="text-danger">{formik.errors.email}</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text" name="mobile" id="mobile"
                                    className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'}
                                    values={formik.values.mobile}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.mobile && formik.touched.mobile ? (<small className="text-danger">{formik.errors.mobile}</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password"
                                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                                    values={formik.values.password}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.password && formik.touched.password ? (<small className="text-danger">{formik.errors.password}</small>) : null}
                            </div>

                            <input type="submit" value="Register" className="btn btn-primary btn-block" disabled={!formik.isValid} />
                        </form>
                        <br />
                        <p className="text-center">
                            Already Registered ? <Link to="/login">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default RegisterPage;
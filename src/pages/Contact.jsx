import React from 'react';
// importing useFormik hook from formik library. This hook will help us to create a form with validation.
import { useFormik } from 'formik';
// importing Yup library to create a validation schema for the form. This will help us to validate the form fields.
import * as Yup from 'yup';
// importing the styles for the Contact component.
import '../styles/Contact.css';

// Contact component. This will show the user a form to contact me.
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        // creating a validation schema for the form fields. This will ensure that the form fields are not empty and the email is in the correct format.
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Message is required'),
        }),
        onSubmit: values => {
            alert('Form submitted');
            console.log(values);
        },
    });
// returning the form with the formik hook. The form will have three fields: name, email, and message. The form will also have a submit button.
    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        {...formik.getFieldProps('name')}
                    />
                </label>
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        {...formik.getFieldProps('email')}
                    />
                </label>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}

                <label>
                    Message:
                    <textarea
                        name="message"
                        {...formik.getFieldProps('message')}
                    />
                </label>
                {formik.touched.message && formik.errors.message ? (
                    <div>{formik.errors.message}</div>
                ) : null}

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
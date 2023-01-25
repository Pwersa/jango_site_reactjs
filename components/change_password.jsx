import styles from "./registration.module.css";
import {Formik, useFormik} from 'formik';
import {forgotPassword} from '../lib/validate';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import * as React from "react";

function Homepage(){

    const[show, setShow] = useState(false)
    const[cshow, setcShow] = useState(false)

    const router = useRouter()
    const name = router.query.name
    const email_query = router.query.email

    // Forgot Password Formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: forgotPassword,
        onSubmit
    });

    async function onSubmit(values) {

        const password = values.password
        const email = values.email

        const data = { email, password };

        await fetch('http://192.168.1.15:4000/submit_pass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                router.push('/login');

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return(
        <div className={styles.container}>     
            <img src="images/profile_rectangle.png" />
            
            <br /><br />
            <div className={styles.forms}>
                <h1>Change Password</h1>

                <form className={styles.login_form} onSubmit={formik.handleSubmit}>

                    <br /><br /><br />
                    <label className={styles.details_label}>New Password:</label>
                    <br />
                    <input className={styles.details_input}
                                    type="email"
                                    name="email"
                                    placeholder="Current Email"
                                    {...formik.getFieldProps("email")}
                            />
                    <br /><br /><br />
                    <label className={styles.details_label}>New Password:</label>
                    <br />
                    <input className={styles.details_input}
                                    type="password"
                                    name="password"
                                    placeholder="New Password"
                                    {...formik.getFieldProps("password")}
                            />
                    <br /><br /><br />
                    <button type="submit" className={styles.button_submit}>Change Pass</button>
                    
                    <br />
                    
                </form>

            </div>

        </div>
    );
};

export default Homepage;
import styles from "./registration.module.css";
import Link from 'next/link';
import { useState } from 'react';
import {useFormik} from 'formik';
import {registerValidate} from "../lib/validate";
import { useRouter } from "next/router";
import toast from "../components/Toast";
import * as React from "react";

function Homepage(){

    const router = useRouter()
    const[show, setShow] = useState(false)
    const[cshow, setcShow] = useState(false)

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);

    const dismiss = React.useCallback(() => {
    toast.dismiss();
    }, []);

    // Register Formik
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit
    });

    async function onSubmit(values) {
        const username = values.username
        const email = values.email
        const password = values.password

        const data = { username, email, password };

        await fetch('http://192.168.1.15:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.message === "Email already exists.") {
                notify("error", data.message)
            } else {
                router.push('/login')
                notify("success", "Successfully Registered.")
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
                <h1>CREATE ACCOUNT</h1>
            
                <br /><br />
                <form className={styles.login_form} onSubmit={formik.handleSubmit}>
                    <div className='gap-2 d-flex flex-row justify-content-between'>
                                    <div className={styles.details_label}>
                                        Email
                                    </div>
                                    {formik.errors.email && formik.touched.email ? 
                                    <span className={styles.guide}>{formik.errors.email}</span> : <></>}
                                </div>
                                <input className={styles.details_input}
                                type="email" 
                                name="email"
                                placeholder="Email"
                                {...formik.getFieldProps('email')}
                        />
                    <br /><br /><br />
                    <div className='gap-2 d-flex flex-row justify-content-between'>
                                    <div className={styles.details_label}>
                                        Username
                                    </div>
                                    {formik.errors.username && formik.touched.username ? 
                                    <span className={styles.guide}>{formik.errors.username}</span> : <></>}
                                </div>
                                <input className={styles.details_input}
                                type="text" 
                                name="username"
                                placeholder="Username"
                                {...formik.getFieldProps('username')}
                        />

                    <br /><br /><br />
                    <div className='gap-2 d-flex flex-row justify-content-between'>
                                    <div className={styles.details_label}>
                                        Password
                                    </div>
                                    {formik.errors.password && formik.touched.password ? 
                                    <span className={styles.guide}>{formik.errors.password}</span> : <></>}
                                </div>
                                <input className={styles.details_input}
                                type="password"
                                name="password"
                                placeholder="Password"
                                {...formik.getFieldProps('password')}
                                />
                    <br /><br /><br />

                    <div className='gap-2 d-flex flex-row justify-content-between'>
                                    <div className={styles.details_label}>
                                        Confirm Password
                                    </div>
                                    {formik.errors.cpassword && formik.touched.cpassword ? 
                                    <span className={styles.guide}>{formik.errors.cpassword}</span> : <></>}
                                </div>
                                <input className={styles.details_input}
                                type="password"
                                name="cpassword"
                                placeholder="Confirm Password"
                                {...formik.getFieldProps('cpassword')}
                                />
                    <br /><br /><br />
                    <button className={styles.button_submit} type="submit">Register</button>
                    
                    <br /><br />

                </form>
                <Link href="/login" ><button className={styles.button_signup}> Log in instead</button></Link>

            </div>

        </div>
    );
};

export default Homepage;
import styles from "./change_password.module.css";
import { useState } from "react";
import Link from 'next/link';
import {forgotPassword} from '../lib/validate';
import {useFormik} from 'formik';
import { useRouter } from 'next/router';
import * as React from "react";

export default function home_site() {

    const[show, setShow] = useState(false)
    const[cshow, setcShow] = useState(false)

    const router = useRouter()
    const name = router.query.name
    const email_query = router.query.email

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);

    const dismiss = React.useCallback(() => {
    toast.dismiss();
    }, []);

    // Forgot Password Formik
    const formik = useFormik({
        initialValues: {
            password: '',
            cpassword: '',
        },
        validate: forgotPassword,
        onSubmit
    });

    async function onSubmit(values) {

        const password = values.password
        const email = email_query

        const data = { email, password };

        await fetch('http://localhost:4000/submit_pass_old', {
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
                notify("success", "Password Change.");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    return (
        <div className={styles.container}>

            <div className={styles.login_form}>

                <form className={styles.login_form} onSubmit={formik.handleSubmit}>
                    
                    <div className={styles.details_label}>
                                            New Password:
                                        </div>
                                        {formik.errors.password && formik.touched.password ? 
                                        <span className={styles.guide}>{formik.errors.password}</span> : <></>}
                                    <br />
                                    <input className={styles.details_input}
                                    type={`${show ?"text":"password"}`}
                                    name="password"
                                    placeholder="Password"
                                    {...formik.getFieldProps('password')}
                        />
                    
                    <br /><br /><br />
                    <div className={styles.details_label}>
                                            Confirm Password:
                                        </div>
                                        {formik.errors.cpassword && formik.touched.cpassword ? 
                                        <span className={styles.guide}>{formik.errors.cpassword}</span> : <></>}
                                    <br />
                                    <input className={styles.details_input}
                                    type={`${cshow ?"text":"password"}`}
                                    name="cpassword"
                                    placeholder="Confirm Password"
                                    {...formik.getFieldProps('cpassword')}
                            />

                    <br /> <br /><br />
                    <button className={styles.button_submit} type="submit">Change my Password</button>
                    <br />

                </form>
               
            </div>

        

        </div>
    );
}
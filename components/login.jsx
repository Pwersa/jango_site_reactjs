import styles from "./login.module.css";
import { useState } from "react";
import Link from 'next/link';
import {getSession, useSession, signIn, signOut } from 'next-auth/react';
import {useFormik} from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';
import toast from "../components/Toast";
import * as React from "react";

export default function home_site() {

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);

    const dismiss = React.useCallback(() => {
    toast.dismiss();
    }, []);

    const[show, setShow] = useState(false)
    const router = useRouter()

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', {callbackUrl: "http://192.168.1.15:3000/profile_account"})
    }

    // Github Handler function
    async function handleGithubSignin(){
        signIn('github', {callbackUrl: "http://192.168.1.15:3000/profile_account"})
    }

    // Login Formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: login_validate,
        onSubmit,
    });

    async function onSubmit(values) {
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "http://192.168.1.15:3000/profile_account"
        })
        if (status.ok) {
            router.push(status.url)
            notify("success", "Successfully Logged In.")
        } else {
            notify("error", "Invalid Credentials.")
        }        
    }

    return (
        <div className={styles.container}>

            <div className={styles.login_form}>

                <form className={styles.login_form} onSubmit={formik.handleSubmit}>
                    
                    <div className={styles.details_label}>
                                        Email:
                    </div>
                                {formik.errors.email && formik.touched.email ? <div className={styles.guide}>{formik.errors.email}</div> : <></>}
                            
                                <input className={styles.details_input}
                                type="email" 
                                name="email"
                                placeholder="Email"
                                {...formik.getFieldProps('email')}
                         />
                    
                    <br /><br /><br />
                    <div className={styles.details_label}>
                                    Password:
                                </div>
                               
                                

                                <input className={styles.details_input}
                                type="password"
                                name="password"
                                placeholder="Password"
                                {...formik.getFieldProps('password')}
                        />

                    <br /> <br /><br />
                    <button className={styles.button_submit} type="submit">Log In</button>
                    <br />

                </form>
               
            </div>

        

        </div>
    );
}

export async function getServerSideProps({req}) {
    const session = await getSession({req})
  
    if (!session) {
      return {
        props: { session }
      }
    }
  
    return {
      redirect: {
        destination: '/profile_account',
        permanent: false
      }
    }
  }
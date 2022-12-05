import styles from "./Homepage.module.css";

function Homepage(){
    return(
        <div className={styles.container}>
            <div className={styles.label}>
                <h1>
                    Welcome to
                    JANGO’s
                    Website!
                </h1>
                <img src="images/green_cross.png" />
                <img src="images/logo_jango.png" /> 
                
            </div>

            <div className={styles.forms}>
                <img src="images/login_form_background.png" />

                <form className={styles.login_form}>
                    <label className={styles.username}>Username:</label>
                    <br />
                    <input className={styles.input_email}type="email" />
                    <br /><br />
                    <label className={styles.password}>Password:</label>
                    <br />
                    <input className={styles.input_password}type="password" />
                    <br /><br /><br />
                    <button className={styles.button_submit} type="submit">Log in</button>
                    <br />
                </form>
                <br />

                <button className={styles.button_signup}>Sign Up</button>
                

                <p className={styles.forgot}>Forgot Password? <a href="#">Click Here</a></p>

            </div>
            <div className={styles.introduction}>
                <a className={styles.contact} href="http://localhost:3000/contact_us">Contact Us!</a>
                <a className={styles.divider} > / </a>
                <a className={styles.about} href="http://localhost:3000/about_us">About Us!</a>
            </div>
        </div>
    );
};

export default Homepage;
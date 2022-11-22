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
                    <br />
                    <input className={styles.input_email}type="email" />
                    <br /><br /><br />
                    <label className={styles.password}>Password:</label>
                    <br /><br />
                    <input className={styles.input_password}type="password" />
                    <br /><br /><br />
                    <button className={styles.button_submit} type="submit">Log in</button>
                    <br />
                </form>

                <label className={styles.forgot}>Forgot Password? <a href="#">Click Here</a></label>

               

            </div>
            <div className={styles.introduction}>
                <a className={styles.contact} href="#">Contact Us!</a>
                <a className={styles.divider} > / </a>
                <a className={styles.about} href="#">About Us!</a>
            </div>
        </div>
    );
};

export default Homepage;
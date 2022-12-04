import styles from "./registration.module.css";

function Homepage(){
    return(
        <div className={styles.container}>

            
            <img src="images/profile_rectangle.png" />
            
            <br /><br />
            <div className={styles.forms}>
                <h1>CREATE ACCOUNT</h1>
                <br /><br />
                <form className={styles.login_form}>
                    <label className={styles.details_label}>Full Name:</label>
                    <br />
                    <input className={styles.details_input}type="name" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Email:</label>
                    <br />
                    <input className={styles.details_input}type="email" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Password:</label>
                    <br />
                    <input className={styles.details_input}type="password" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Confirm Password:</label>
                    <br />
                    <input className={styles.details_input}type="password" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Address:</label>
                    <br />
                    <input className={styles.details_input}type="text" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Contact#:</label>
                    <br />
                    <input className={styles.details_input}type="number" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Birthdate:</label>
                    <br />
                    <input className={styles.details_input}type="date" />
                    <br /><br /><br />
                    <button className={styles.button_submit} type="submit">Log in</button>
                    <br />
                </form>
                <br />

                <button className={styles.button_signup}>Sign Up</button>
                

                <p className={styles.forgot}>Forgot Password? <a href="#">Click Here</a></p>

            </div>

        </div>
    );
};

export default Homepage;
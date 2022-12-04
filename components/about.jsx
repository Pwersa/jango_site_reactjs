import styles from "./about.module.css";

function BasicExample() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>ABOUT US</h1>
                <p>We are Jango Keebs, founder of this keyboard retailing site. We specialize in facilitating 
                    the transaction of keyboards, and keyboard-related items. Born from a dream of 
                    streamlining the process of building and buying custom keyboards, we made this site 
                    for casuals and enthusiasts alike. So what are you waiting for? Go and make the 
                    keyboard of your dreams come true!
                </p>
                <img src="people/duran.png" />
                <img src="people/sango.png" />
                <img src="people/indaya.png" />
                <img src="people/edellon.png" />
                <img src="people/manego.png" />
            
            </div>

            <div className={styles.forms}>
                <h1>CONTACT US</h1>
                <h2>Send an Email:</h2>
                <form className={styles.login_form}>
                    <label className={styles.grid_item}>Email:</label>
                    <br />
                    <input className={styles.grid_item} type="email" />
                    <br /><br /><br />
                    <label className={styles.grid_item}>First Name:</label>
                    <br />
                    <input className={styles.grid_item} type="name" />
                    <br /><br /><br />
                    <label className={styles.grid_item}>Last Name:</label>
                    <br />
                    <input className={styles.grid_item} type="name" />
                    <br /><br /><br />
                    <label className={styles.grid_item}>Caller Number:</label>
                    <br />
                    <input className={styles.grid_item} type="number" />
                    <br /><br /><br />
                    <button className={styles.submit_details} type="submit">SUBMIT</button>
                    
                    <br />
                </form>
            </div>

            <div className={styles.call_us}>
                <h2>CALL US</h2>

                <div className={styles.call_us_container}>
                    <div className={styles.image}>
                        <img src="/images/call_us.png" />
                    </div>
                    <div className={styles.label}>
                        <h2>Mobile Number: (+63) 1234-1233</h2>
                        <h2>Telephone Number: (+63) 1234-1233</h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default BasicExample;
import styles from "./item_listing.module.css";

function Homepage(){
    return(
        <div className={styles.container}>

            
            <img src="images/profile_rectangle.png" />
            
            <br /><br />
            <div className={styles.forms}>
                <h1>LIST A KEYBOARD</h1>
                <br /><br />
                <form className={styles.login_form}>
                    <label className={styles.details_label}>Item Name:</label>
                    <br />
                    <input className={styles.details_input}type="text" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Details:</label>
                    <br />
                    <input className={styles.details_input}type="text" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Location:</label>
                    <br />
                    <input className={styles.details_input}type="text" />
                    <br /><br /><br />
                    <label className={styles.details_label}>Price:</label>
                    <br />
                    <input className={styles.details_input}type="number" />
                    <br /><br /><br />
                    <button className={styles.button_submit} type="submit">Confirm</button>
                    <br />
                </form>
                <br />
            </div>
        </div>
    );
};

export default Homepage;
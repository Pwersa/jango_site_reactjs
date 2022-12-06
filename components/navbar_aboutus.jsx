import styles from "./navbar_aboutus.module.css";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <img src="images/icon_badge.png" width="90" height="90" />  
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <button className={styles.login_button}> Login </button>
          <button className={styles.sign_up_button}> Sign Up </button>
        </div>
      </div>
    );
  };
  
  export default Navbar;
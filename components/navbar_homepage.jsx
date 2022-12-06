import styles from "./navbar_homepage.module.css";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="images/icon_badge.png" width="90" height="90" />  
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <a className={styles.about_us} href="http://localhost:3000/about_us">About Us</a>
          <a className={styles.log_in} href="#">Log In</a>
          <button className={styles.sign_up} >Sign Up</button>
        </div>
      </div>
    );
  };
  
  export default Navbar;
import styles from "./navbar_homepage.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <img src="images/icon_badge.png" width="90" height="90" />  
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <Link href="http://localhost:3000/about_us" className={styles.about_us}>About Us</Link>
          <Link href="http://localhost:3000/profile_account" className={styles.log_in}>Log In</Link>
          <Link href="http://localhost:3000/registration"><button className={styles.sign_up} >Sign Up</button></Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;
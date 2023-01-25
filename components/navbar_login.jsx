import styles from "./navbar_login.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <img src="images/icon_badge.png" width="90" height="90" />  
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <Link href="/about_us" className={styles.about_us}>About Us</Link>
          <Link href="/registration" className={styles.register}>Register</Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;
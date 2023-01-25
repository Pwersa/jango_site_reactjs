import styles from "./navbar_profile.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="images/icon_badge.png" width="90" height="90" />  
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <Link href="/home_logged_in" className={styles.marketplace}>Marketplace</Link>
          <Link href="/pictures" className={styles.marketplace}>My~Gallery</Link>
          <Link href="/change_password" className={styles.marketplace}>Change~Password</Link>
          <Link href="/profile_account" className={styles.marketplace}>My~Profile</Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;
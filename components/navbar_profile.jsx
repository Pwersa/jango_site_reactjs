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
          <Link href="http://localhost:3000/home_logged_in" className={styles.marketplace}>Marketplace</Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;
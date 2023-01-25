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
        <Link href="/profile_account" >Back to Profile</Link>
    
        </div>
      </div>
    );
  };
  
  export default Navbar;
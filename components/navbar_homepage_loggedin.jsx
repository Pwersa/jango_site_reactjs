import styles from "./navbar_homepage_loggedin.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="images/icon_badge.png" width="90" height="90" />
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
        <Link href="http://localhost:3000/my_cart" >My CART</Link>
        <Link href="http://localhost:3000/profile_account" ><img src="people/placeholder.png" width="70" height="70" />  </Link>
          
        </div>
      </div>
    );
  };
  
  export default Navbar;
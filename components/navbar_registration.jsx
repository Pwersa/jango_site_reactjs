import styles from "./navbar_profile.module.css";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="images/icon_badge.png" width="90" height="90" />  
          <h1>JANGO KEEB</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <a href="#">Home</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
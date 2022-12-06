import styles from "./navbar_homepage_loggedin.module.css";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="images/icon_badge.png" width="90" height="90" />
          <h1>Jango Keebs</h1>
        </div>
        
        <div className={styles.navbarButtons}>
          <a href="#">My Cart</a>
          <img src="people/placeholder.png" width="90" height="90" />  
        </div>
      </div>
    );
  };
  
  export default Navbar;
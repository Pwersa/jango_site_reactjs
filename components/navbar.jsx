import styles from "./navbar.module.css";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div>
          <img src="/images/tupclogo.png" width="90" height="90" />
        </div>
        <div className={styles.navbarButtons}>
          <button> Login </button>
          <button> Sign Up </button>
        </div>
      </div>
    );
  };
  
  export default Navbar;
import styles from "./call.module.css"

function Call_us(){
  return(
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/images/call_us.png" />
        </div>
        <div className={styles.label}>
            <h1>Call Us</h1>
            <p>
              Call us at (xxx)xxx-xxxx, or email at example@mail.com, free roaming and available 
              24/7.
            </p>
          </div>
      </div>

      
  )
}

export default Call_us;
import styles from "./service.module.css"

function service_us(){
  return(
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/images/get_in_touch.png" />
        </div>
        <div className={styles.label}>
            <h1>Get In Touch</h1>
            <p>
              Get in touch of our very high quality employers that will assist you through the website. 
            </p>
            <p>
              <a className={styles.about} href="http://localhost:3000/about_us">Click here</a> to check the developers       
            </p>
          </div>
      </div>
  )
}

export default service_us;
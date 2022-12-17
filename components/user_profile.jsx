import styles from "./user_profile.module.css";
import Link from 'next/link';

function Homepage(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>USER PROFILE</h1>
                <Link href="http://localhost:3000/item_listing" ><button className={styles.title_button}>List Item</button></Link>
                <Link href="http://localhost:3000/home" ><button className={styles.title_button}>Log Out</button></Link>
                
            </div>

            <img src="images/profile_rectangle.png" />

            <div className={styles.card_profile}>
            
                <img src="people/placeholder.png" />
                <div className={styles.name_label}>
                    <h2>NAME:</h2>
                    <h2>EMAIL:</h2>
                    <h2>ADDRESS:</h2>
                    <h2>CONTACT #:</h2>
                    <h2>Birthdate:</h2>
                </div>

                <div className={styles.informations}>
                    <h2>JR Angelo Indaya</h2>
                    <h2>example@email.com</h2>
                    <h2>Example Address City:</h2>
                    <h2>426-67844</h2>
                    <h2>January 31, 2001</h2>
                </div>

                <div className={styles.other_label}>
                    <h2>USER RATINGS: </h2>
                    <h2>ITEMS SOLD: </h2>
                    <h2>ITEMS BOUGHT: </h2>
                    <h2>DATE JOINED: </h2>
                </div>

                <div className={styles.other_informations}>
                    <h2>4.8</h2>
                    <h2>12</h2>
                    <h2>5</h2>
                    <h2>January 31, 2001</h2>
                </div>



            </div>
        </div>
    );
};

export default Homepage;
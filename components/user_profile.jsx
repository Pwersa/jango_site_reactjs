import styles from "./user_profile.module.css";
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession, getSession } from "next-auth/react";

function Homepage( {users} ){
    const {data:session} = useSession()

        if (session) { 
            return(
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>USER PROFILE</h1>
                    <Link href="/item_listing" ><button className={styles.title_button}>List Item</button></Link>
                    <button onClick={() => signOut()}  className={styles.title_button}>Log Out</button>
                    
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

}

export default Homepage;

export async function getServerSideProps({req}) {
    const session = await getSession({req})
    const res = await fetch('http://26.30.216.187:4000/pictures');
    const data = await res.json();
  
    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  
    return {
      props: { session, users: data }
    }
  }
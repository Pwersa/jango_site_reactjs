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
                
                <table>
                    <tr>
                        <td className={styles.title_user}>Name</td>
                        <td className={styles.title_detail}>JR Angelo Indaya</td>
                    </tr>
                    <tr>
                        <td className={styles.title_user}>Email</td>
                        <td className={styles.title_detail}>example_email@example.com</td>
                    </tr>
                    <tr>
                        <td className={styles.title_user}>Address</td>
                        <td className={styles.title_detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta et velit nostrum aliquid.</td>

                    </tr>
                    <tr>
                        <td className={styles.title_user}>Contact Number</td>
                        <td className={styles.title_detail}>xxxxxxxxxxx</td>

                    </tr>
                    <tr>
                        <td className={styles.title_user}>Birthday</td>
                        <td className={styles.title_detail}>xx-xx-xxx</td>

                    </tr>
                    </table>
            </div>

            <div className={styles.card_more_details}>
                <table>
                    <tr>
                        <td className={styles.title_user_more_detail}>Date Joined</td>
                        <td className={styles.title_more_detail}>xx-xx-xxxx</td>
                    </tr>
                    <tr>
                        <td className={styles.title_user_more_detail}>Ratings</td>
                        <td className={styles.title_more_detail}>example_email@example.com</td>
                    </tr>
                    <tr>
                        <td className={styles.title_user_more_detail}>Number of Items Bought</td>
                        <td className={styles.title_more_detail}>100</td>

                    </tr>
                    <tr>
                        <td className={styles.title_user_more_detail}>Number of Items Sold</td>
                        <td className={styles.title_more_detail}>xxxxxxxxxxx</td>

                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Homepage;
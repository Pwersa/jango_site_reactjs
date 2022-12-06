import styles from "./homepage.module.css";
import Link from 'next/link';

function home_site() {
    return (
        <div className={styles.container}>
            <h1>ITEM SPOTLIGHT</h1>

            <div className={styles.items_available}>
                <img className={styles.card_items}src="images/profile_rectangle.png" />
                <img className={styles.product}src="items/gmmk.png" />
                <h1>BRAND X</h1>
                <p> This sleek keyboard features a 60% layout and a cobalt blue body. With grey and blue double-shot PBT MSA keycaps, 
                    this cool keyboard surely deserves a spot in your PC setup.
                </p>
                <Link href="http://localhost:3000/my_cart"><button className={styles.items_available_button} >Add to Cart</button></Link>
            </div>

            <div className={styles.search_item}>
                <h1>ITEM SEARCH:</h1>
                <input type="text" />
                <button  className={styles.search_item_button} >SEARCH</button>
            </div>

            <div className={styles.items_available}>
                <img className={styles.card_items}src="images/profile_rectangle.png" />
                <img className={styles.product}src="items/garudagear.png" />
               
                <h1>BRAND X</h1>
                <h2>P10,000</h2>
                <h3>"SELLER NAME"</h3>
                <h4>SPECIFICATIONS:</h4>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt, quasi temporibus cum quos modi voluptatum facilis.</h5>
                <Link href="http://localhost:3000/my_cart"><button className={styles.items_available_button} >Add to Cart</button></Link>
                
            </div>

            <div className={styles.items_available}>
                <img className={styles.card_items}src="images/profile_rectangle.png" />
                <img className={styles.product}src="items/kimat.png" />
               
                <h1>BRAND X</h1>
                <h2>P10,000</h2>
                <h3>"SELLER NAME"</h3>
                <h4>SPECIFICATIONS:</h4>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt, quasi temporibus cum quos modi voluptatum facilis.</h5>
                <Link href="http://localhost:3000/my_cart"><button className={styles.items_available_button} >Add to Cart</button></Link>
                
            </div>
            
            <div className={styles.items_available}>
                <img className={styles.card_items}src="images/profile_rectangle.png" />
                <img className={styles.product}src="items/logitech.png" />
               
                <h1>BRAND X</h1>
                <h2>P10,000</h2>
                <h3>"SELLER NAME"</h3>
                <h4>SPECIFICATIONS:</h4>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt, quasi temporibus cum quos modi voluptatum facilis.</h5>
                <Link href="http://localhost:3000/my_cart"><button className={styles.items_available_button} >Add to Cart</button></Link>
                
            </div>

        </div>
    );
}

export default home_site;
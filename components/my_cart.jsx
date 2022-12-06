import styles from "./my_cart.module.css";

function home_site() {
    return (
        <div className={styles.container}>
            <h1>Items in the Cart:</h1>

            <div className={styles.items_available}>
                <img className={styles.card_items}src="images/profile_rectangle.png" />
                <img className={styles.product}src="items/product_2.png" />
               
                <h1>BRAND X</h1>
                <h2>P10,000</h2>
                <h3>"SELLER NAME"</h3>
                <h4>SPECIFICATIONS:</h4>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt, quasi temporibus cum quos modi voluptatum facilis.</h5>
                <button className={styles.items_available_button}>Remove From Cart</button>

            </div>

            <div className={styles.items_available}>
                <img className={styles.card_items}src="images/profile_rectangle.png" />
                <img className={styles.product}src="items/product_2.png" />
               
                <h1>BRAND X</h1>
                <h2>P10,000</h2>
                <h3>"SELLER NAME"</h3>
                <h4>SPECIFICATIONS:</h4>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt, quasi temporibus cum quos modi voluptatum facilis.</h5>
                <button className={styles.items_available_button}>Remove From Cart</button>

            </div>

            <div className={styles.payment_method}>

                <img className={styles.card_items} src="images/profile_rectangle.png" />
               
                <h1>Delivery Location:</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, nisi! Illum, soluta accusamus</h2>
                <h3>Select Payment Method:</h3>
                <img className={styles.payment_card} src="images/yellow_card.png" />
                <img className={styles.g_cash} src="images/g_cash.png" />
                <img className={styles.cod} src="images/cod.png" />

            </div>

            <div className={styles.pay_amount}>
                <h1>Total Fee:</h1>
                <h3>P1,234</h3>
                <button className={styles.pay_amount_button}>Check Out</button>

            </div>
            
        </div>
    );
}

export default home_site;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./about.module.css";

function BasicExample() {
    return (
        <div className={styles.container}>
            <h1>About us</h1>
            <div className={styles.cards}>
                <Card  style={{ width: '24rem' }}>
                    <Card.Img className={styles.image_card} variant="top" src="people/cat1.png"/>
                    <Card.Body>
                    <Card.Title className={styles.names}>Rogie Prinz Duran</Card.Title>
                    <Card.Title className={styles.titles}>Developer</Card.Title>
                    <Card.Text className={styles.details}>
                        Hi, my name is ... and im fron BET-COET-4A
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.cards}>
                <Card  style={{ width: '24rem' }}>
                    <Card.Img className={styles.image_card} variant="top" src="people/cat2.png" />
                    <Card.Body>
                    <Card.Title className={styles.names}>Roniel Sango</Card.Title>
                    <Card.Title className={styles.titles}>Developer</Card.Title>
                    <Card.Text className={styles.details}>
                        Hi, my name is ... and im fron BET-COET-4A
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.cards}>
                <Card  style={{ width: '24rem' }}>
                    <Card.Img className={styles.image_card} variant="top" src="people/cat3.png" />
                    <Card.Body>
                    <Card.Title className={styles.names}>Joshua Yves Edellon</Card.Title>
                    <Card.Title className={styles.titles}>Developer</Card.Title>
                    <Card.Text className={styles.details}>
                        Hi, my name is ... and im fron BET-COET-4A
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.cards}>
                <Card  style={{ width: '24rem' }}>
                    <Card.Img className={styles.image_card} variant="top" src="people/cat4.png" />
                    <Card.Body>
                    <Card.Title className={styles.names}>Justine Ivan Manego</Card.Title>
                    <Card.Title className={styles.titles}>Developer</Card.Title>
                    <Card.Text className={styles.details}>
                        Hi, my name is ... and im fron BET-COET-4A
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.cards}>
                <Card  style={{ width: '24rem' }}>
                    <Card.Img className={styles.image_card} variant="top" src="people/cat5.png" />
                    <Card.Body>
                    <Card.Title className={styles.names}>JR Angelo Indaya</Card.Title>
                    <Card.Title className={styles.titles}>Developer</Card.Title>
                    <Card.Text className={styles.details}>
                        Fulcrum come in, yuhhhhhhhh, yodie gang!
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default BasicExample;
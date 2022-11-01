import Carousel from 'react-bootstrap/Carousel';
import styles from './employee.module.css'

export default function Employees() {
    return (
        <div className={styles.carousel}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className={styles.imgPerson}
                        src="/person1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imgPerson}
                        src="/person2.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imgPerson}
                        src="/person3.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>

    );

}
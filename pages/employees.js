import Carousel from 'react-bootstrap/Carousel';
import styles from './employee.module.css'

export default function Employees() {
    return (
        <div className={styles.carousel}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className={styles.imgPerson}
                        src="/images/person1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imgPerson}
                        src="/images/person2.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imgPerson}
                        src="/images/person3.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>

    );

}
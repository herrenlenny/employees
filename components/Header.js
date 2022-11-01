import styles from "./Header.module.css"
import Link from 'next/link'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function Header({children}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className={styles.head}>


            <header className={styles.header}>
                <div className={styles.menu}>
                    <Button variant="primary" onClick={handleShow}>
                        ≡
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>

                {children}
            </header>
        </div>
    )
}
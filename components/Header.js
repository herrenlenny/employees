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
                    <Button variant="dark" onClick={handleShow}>
                        ≡
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className={styles.links}>
                                <div className={styles.menuLinks}>
                                    <Link closeButton href="/posts/create">Create a Post</Link>
                                    <Link closeButton href="/employees">Employees</Link>
                                    <Link closeButton href="/impressum">Impressum</Link>
                                </div>

                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>

                {children}
            </header>
        </div>
    )
}
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
        <div>


            <header className={styles.header}>
                <div className={styles.menu}>
                    <Button variant="dark" onClick={handleShow}>
                        ≡
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>
                                <div className={styles.menuLinks}>
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a onClick={async (e) => handleClose} href="/posts/create">Create a Post</a>
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a onClick={async (e) => handleClose} href="/employees">Employees</a>
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a onClick={async (e) => handleClose} href="/impressum">Impressum</a>
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
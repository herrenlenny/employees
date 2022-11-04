import styles from "./Header.module.css"
import Link from 'next/link'
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Header({children}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>


            <header className={styles.header}>
                <div className={styles.menuHamburger}>
                    <Button variant="dark" onClick={handleShow}>
                        ≡
                    </Button>
                    <div>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div>
                                    <div className={styles.menuLinksHamburger}>
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
                </div>

                {children}
            </header>

            <div className={styles.menu}>
                <div className={styles.menuLinks}>
                    <Link href="/posts/create">Create a Post</Link>
                    <Link href="/employees">Employees</Link>
                    <Link href="/impressum">Impressum</Link>
                </div>

            </div>
        </div>
    )
}
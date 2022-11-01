import styles from "./Header.module.css"
import Link from 'next/link'

export default function Header({children}) {
    return (
        <div className={styles.head}>
            <header className={styles.header}>
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

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><a href="#">רשימה</a></li>
                <li><a href="#">רשימה</a></li>
                <li><a href="#">רשימה</a></li>
                <li><a href="#">רשימה</a></li>
            </ul>
        </nav>
        
    );
}
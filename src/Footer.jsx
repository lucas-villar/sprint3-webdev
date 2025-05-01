import styles from './footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <p>&copy; 2025 App Saúde Infantil - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}   
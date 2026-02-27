import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.wave} aria-hidden="true">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
                </svg>
            </div>
            <div className={`container ${styles.inner}`}>
                <div className={styles.logo}>🌸 Tasya Amalia</div>
                <p className={styles.copy}>
                    Made with 💖 by Tasya Amalia · © {year} All rights reserved
                </p>
                <div className={styles.links}>
                    <a href="mailto:tasyaamalia646@gmail.com" className={styles.link} aria-label="Email">📧</a>
                    <a href="https://www.linkedin.com/in/tasya-amalia-5669462b8" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">💼</a>
                </div>
            </div>
        </footer>
    );
}

import styles from './Contact.module.css';

export default function Contact() {
    const handleEmail = () => {
        window.location.href = 'mailto:tasyaamalia646@gmail.com';
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.bgDecor} aria-hidden="true" />
            <div className="container">
                <div className="pill">💌 Kontak</div>
                <h2 className="section-title">Say <span className="title-accent">Hello!</span></h2>
                <p className="section-subtitle">Tertarik bekerja sama? Saya selalu siap untuk peluang baru! 🌸</p>

                <div className={styles.grid}>
                    {/* Contact Card: Email */}
                    <a href="mailto:tasyaamalia646@gmail.com" className={styles.card} id="contact-email">
                        <div className={styles.cardIcon} style={{ background: '#FFE0EE' }}>📧</div>
                        <div className={styles.cardContent}>
                            <h3>Email</h3>
                            <p>tasyaamalia646@gmail.com</p>
                        </div>
                        <span className={styles.arrow}>→</span>
                    </a>

                    {/* Contact Card: LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/tasya-amalia-5669462b8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                        id="contact-linkedin"
                    >
                        <div className={styles.cardIcon} style={{ background: '#DBEAFE' }}>💼</div>
                        <div className={styles.cardContent}>
                            <h3>LinkedIn</h3>
                            <p>Tasya Amalia</p>
                        </div>
                        <span className={styles.arrow}>→</span>
                    </a>
                </div>

                {/* CTA Box */}
                <div className={styles.ctaBox}>
                    <div className={styles.ctaEmoji}>🚀</div>
                    <h3>Ready to Collaborate?</h3>
                    <p>
                        Saya sedang mencari kesempatan magang atau pekerjaan penuh waktu di bidang komunikasi,
                        media, atau marketing. Mari terhubung dan wujudkan ide bersama!
                    </p>
                    <button className="btn btn-primary" onClick={handleEmail} id="hire-me-btn">
                        ✉️ Kirim Pesan
                    </button>
                </div>
            </div>
        </section>
    );
}

import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.bg} aria-hidden="true" />
            <div className="container">
                <div className="pill">💕 Tentang Saya</div>
                <h2 className="section-title">Siapa <span className="title-accent">Tasya?</span></h2>
                <p className="section-subtitle">Kenalan lebih dekat dengan saya yuk! 🌸</p>

                <div className={styles.grid}>
                    {/* Left: Story */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>👩‍🎓</div>
                        <h3>My Story</h3>
                        <p>
                            Perkenalkan, saya <strong>Tasya Amalia</strong> — mahasiswi semester 8 Program Studi
                            Ilmu Komunikasi di Institut Bisnis & Informatika Kosgoro 1957. Selama berkuliah,
                            saya telah mengembangkan kemampuan komunikasi, analisis media, dan pembuatan konten
                            yang relevan di era digital.
                        </p>
                        <p>
                            Saya percaya bahwa komunikasi yang baik adalah kunci kesuksesan dalam setiap aspek
                            kehidupan — baik dalam hubungan personal maupun profesional. Dengan bekal ilmu yang
                            saya miliki, saya siap memberikan kontribusi nyata. ✨
                        </p>
                    </div>

                    {/* Middle: Education */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🏫</div>
                        <h3>Pendidikan</h3>
                        <div className={styles.eduItem}>
                            <div className={styles.eduBadge}>2021 — Sekarang</div>
                            <h4>Institut Bisnis & Informatika Kosgoro 1957</h4>
                            <p>S1 Ilmu Komunikasi • Semester 8</p>
                            <p className={styles.eduNote}>Fokus pada komunikasi massa, media digital, dan hubungan masyarakat</p>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.qualities}>
                            <span>🎯 Fokus & Berdedikasi</span>
                            <span>💡 Kreatif & Inovatif</span>
                            <span>🤝 Team Player</span>
                            <span>📝 Detail-Oriented</span>
                        </div>
                    </div>

                    {/* Right: Goals */}
                    <div className={`${styles.card} ${styles.goalCard}`}>
                        <div className={styles.cardIcon}>🚀</div>
                        <h3>My Goals</h3>
                        <p>
                            Saya sedang mempersiapkan diri untuk memasuki dunia profesional dengan penuh semangat.
                            Target saya adalah berkarir di bidang:
                        </p>
                        <ul className={styles.goalList}>
                            <li>📢 Public Relations / Humas</li>
                            <li>📱 Social Media Management</li>
                            <li>🎬 Content Creation & Media</li>
                            <li>📊 Marketing Communications</li>
                            <li>🗣️ Event Organizer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

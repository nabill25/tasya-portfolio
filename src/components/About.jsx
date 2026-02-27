import styles from './About.module.css';
import profileImg from '../assets/profile.png';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.bg} aria-hidden="true" />
            <div className="container">
                <div className="pill">💕 Tentang Saya</div>
                <h2 className="section-title">Siapa <span className="title-accent">Tasya?</span></h2>
                <p className="section-subtitle">Kenalan lebih dekat dengan saya yuk! 🌸</p>

                <div className={styles.grid}>
                    {/* Left: Story + Photo */}
                    <div className={styles.card}>
                        <div className={styles.profilePhotoWrapper}>
                            <img src={profileImg} alt="Tasya Amalia" className={styles.profilePhoto} />
                        </div>
                        <div className={styles.cardIcon}>👩‍🎓</div>
                        <h3>My Story</h3>
                        <p>
                            Halo, saya <strong>Tasya Amalia!</strong> Saya adalah seorang profesional kreatif dengan latar belakang
                            Ilmu Komunikasi yang memiliki passion besar di dunia digital.
                        </p>
                        <p>
                            Bagi saya, karya digital yang baik adalah perpaduan harmonis antara estetika visual dan komunikasi
                            yang efektif. Saya selalu antusias mengeksplorasi ide-ide baru dan berkomitmen untuk menciptakan
                            solusi digital yang tidak hanya memanjakan mata, tetapi juga memberikan pengalaman yang bermakna
                            bagi penggunanya.
                        </p>
                        <p className={styles.ctaText}>
                            ✨ <em>Mari berkolaborasi dan ciptakan sesuatu yang luar biasa!</em>
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

import avatarImg from '../assets/profile.png';
import styles from './Hero.module.css';

const floatingItems = ['🌸', '💕', '✨', '🌺', '💖', '⭐', '🦋', '🌷'];

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            {/* Floating decorations */}
            <div className={styles.floatingWrapper} aria-hidden="true">
                {floatingItems.map((item, i) => (
                    <span key={i} className={styles.floatingItem} style={{ '--delay': `${i * 0.7}s`, '--x': `${10 + i * 11}%` }}>
                        {item}
                    </span>
                ))}
            </div>

            {/* Background blobs */}
            <div className={styles.blob1} aria-hidden="true" />
            <div className={styles.blob2} aria-hidden="true" />

            <div className={`container ${styles.inner}`}>
                {/* Text Side */}
                <div className={styles.textSide}>
                    <div className="pill">✨ Available for Hire</div>
                    <h1 className={styles.name}>
                        Hi, Saya <span className={styles.gradient}>Tasya Amalia</span> 👋
                    </h1>
                    <p className={styles.tagline}>
                        "Communicating ideas, building connections, and turning passion into impact."
                    </p>
                    <p className={styles.desc}>
                        Mahasiswi <strong>Ilmu Komunikasi</strong> di Institut Bisnis & Informatika Kosgoro 1957, semester 8.
                        Bersemangat, kreatif, dan siap memberikan kontribusi terbaik di dunia profesional! 🚀
                    </p>
                    <div className={styles.badges}>
                        <span className={styles.badge}>🎓 IBI Kosgoro 1957</span>
                        <span className={styles.badge}>📡 Ilmu Komunikasi</span>
                        <span className={styles.badge}>💼 Semester 8</span>
                    </div>
                    <div className={styles.actions}>
                        <a href="#contact" className="btn btn-primary">Hubungi Saya 💌</a>
                        <a href="#projects" className="btn btn-outline">Lihat Karya</a>
                    </div>
                </div>

                {/* Avatar Side */}
                <div className={styles.avatarSide}>
                    <div className={styles.avatarFrame}>
                        <div className={styles.avatarRing} />
                        <img src={avatarImg} alt="Tasya Amalia" className={styles.avatar} />
                        <div className={styles.avatarBadge}>🌸</div>
                    </div>
                    <div className={styles.statCards}>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>8</span>
                            <span className={styles.statLabel}>Semester</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>∞</span>
                            <span className={styles.statLabel}>Semangat</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>100%</span>
                            <span className={styles.statLabel}>Dedikasi</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scroll}>
                <span>Scroll ke bawah</span>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}

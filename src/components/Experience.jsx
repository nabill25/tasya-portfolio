import styles from './Experience.module.css';

const experiences = [
    {
        period: '2022 – 2023',
        role: 'Anggota Aktif',
        organization: 'Himpunan Mahasiswa Ilmu Komunikasi',
        campus: 'IBI Kosgoro 1957',
        icon: '🎓',
        tags: ['Kepanitiaan', 'Event', 'Komunikasi'],
        desc: 'Aktif berpartisipasi dalam berbagai kegiatan himpunan, membantu penyelenggaraan event kampus, dan berkolaborasi dengan sesama mahasiswa dalam kepanitiaan.',
    },
    {
        period: '2023',
        role: 'Panitia Acara',
        organization: 'Orientasi Mahasiswa Baru',
        campus: 'IBI Kosgoro 1957',
        icon: '🎪',
        tags: ['Organizing', 'Leadership', 'Teamwork'],
        desc: 'Berperan sebagai panitia dalam kegiatan orientasi mahasiswa baru, bertanggung jawab dalam koordinasi teknis dan memastikan kelancaran acara.',
    },
    {
        period: '2023 – 2024',
        role: 'Content Creator',
        organization: 'Proyek Konten Digital',
        campus: 'Tugas Kuliah',
        icon: '📸',
        tags: ['Content', 'Social Media', 'Canva'],
        desc: 'Membuat konten edukatif dan kreatif untuk berbagai platform media sosial sebagai bagian dari praktik mata kuliah, termasuk scripting, editing, dan publikasi.',
    },
    {
        period: '2024',
        role: 'Peneliti',
        organization: 'Skripsi / Tugas Akhir',
        campus: 'IBI Kosgoro 1957',
        icon: '📝',
        tags: ['Research', 'Analisis', 'Komunikasi'],
        desc: 'Sedang menyelesaikan penelitian tugas akhir yang berfokus pada kajian ilmu komunikasi, dengan menggunakan metode penelitian kualitatif dan/atau kuantitatif.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.decorLeft} aria-hidden="true">🌸</div>
            <div className={styles.decorRight} aria-hidden="true">💫</div>
            <div className="container">
                <div className="pill">🏆 Pengalaman</div>
                <h2 className="section-title">Organisasi & <span className="title-accent">Pengalaman</span></h2>
                <p className="section-subtitle">Perjalanan saya selama berkuliah 🌷</p>

                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.dot}>
                                <span>{exp.icon}</span>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.period}>{exp.period}</span>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <p className={styles.org}>{exp.organization}</p>
                                <p className={styles.campus}>📍 {exp.campus}</p>
                                <p className={styles.desc}>{exp.desc}</p>
                                <div className={styles.tags}>
                                    {exp.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.line} />
                </div>
            </div>
        </section>
    );
}

import styles from './Skills.module.css';

const skillCategories = [
    {
        icon: '📡',
        title: 'Komunikasi',
        color: '--rose',
        skills: [
            { name: 'Public Speaking', level: 85 },
            { name: 'Penulisan & Copywriting', level: 80 },
            { name: 'Komunikasi Interpersonal', level: 90 },
            { name: 'Presentasi', level: 82 },
        ],
    },
    {
        icon: '📱',
        title: 'Digital & Media',
        color: '--pink-500',
        skills: [
            { name: 'Social Media Management', level: 88 },
            { name: 'Content Creation', level: 85 },
            { name: 'Canva Design', level: 80 },
            { name: 'Video Editing', level: 72 },
        ],
    },
    {
        icon: '🤝',
        title: 'Profesional',
        color: '--rose-dark',
        skills: [
            { name: 'Teamwork & Kolaborasi', level: 92 },
            { name: 'Manajemen Waktu', level: 78 },
            { name: 'Problem Solving', level: 80 },
            { name: 'Riset & Analisis', level: 76 },
        ],
    },
];

const softSkills = ['🎯 Inisiatif', '💬 Artikulatif', '🧠 Kritis', '🌟 Adaptif', '❤️ Empati', '⚡ Fast Learner'];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <div className="pill">⚡ Kemampuan</div>
                <h2 className="section-title">Skills <span className="title-accent">& Keahlian</span></h2>
                <p className="section-subtitle">Berikut kemampuan yang saya kembangkan selama berkuliah 🌟</p>

                <div className={styles.grid}>
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{cat.icon}</span>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className={styles.skillList}>
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skillItem}>
                                        <div className={styles.skillMeta}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillPct}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.barTrack}>
                                            <div
                                                className={styles.barFill}
                                                style={{ '--width': `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft skills tags */}
                <div className={styles.softSection}>
                    <h3>Soft Skills</h3>
                    <div className={styles.softTags}>
                        {softSkills.map(s => (
                            <span key={s} className={styles.softTag}>{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

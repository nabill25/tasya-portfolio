import styles from './Projects.module.css';

const projects = [
    {
        emoji: '📰',
        title: 'Analisis Framing Media',
        category: 'Riset Komunikasi',
        desc: 'Penelitian analisis framing terhadap pemberitaan isu sosial di media online Indonesia. Menggunakan metode kualitatif dengan pendekatan analisis konten.',
        tags: ['Penelitian', 'Media Analysis', 'Komunikasi'],
        color: '#FFD6E8',
    },
    {
        emoji: '📱',
        title: 'Kampanye Media Sosial',
        category: 'Konten Digital',
        desc: 'Membuat dan mengelola kampanye konten di Instagram selama satu bulan, menghasilkan peningkatan engagement dan awareness untuk topik sosial terpilih.',
        tags: ['Social Media', 'Content', 'Strategy'],
        color: '#FFE0EE',
    },
    {
        emoji: '🎤',
        title: 'Event Talkshow Kampus',
        category: 'Event Organizing',
        desc: 'Menginisiasi dan mengorganisir talkshow bertema komunikasi dan karir di kampus. Mulai dari konsep, undangan pembicara, promosi, hingga pelaksanaan acara.',
        tags: ['Event', 'Organizing', 'Public Relations'],
        color: '#FFF0F6',
    },
    {
        emoji: '📊',
        title: 'Riset Perilaku Konsumen',
        category: 'Marketing Communication',
        desc: 'Studi kasus tentang perilaku konsumen Gen-Z di media digital sebagai tugas mata kuliah Komunikasi Pemasaran. Menghasilkan laporan komprehensif.',
        tags: ['Riset', 'Marketing', 'Komunikasi'],
        color: '#FFD6E8',
    },
    {
        emoji: '✍️',
        title: 'Blog & Copywriting',
        category: 'Penulisan',
        desc: 'Membuat artikel dan konten tulis untuk berbagai topik mulai dari lifestyle, edukasi, hingga sosial. Mengutamakan keterbacaan dan daya tarik pembaca.',
        tags: ['Writing', 'Blog', 'Copywriting'],
        color: '#FFE0EE',
    },
    {
        emoji: '🎬',
        title: 'Produksi Video Profile',
        category: 'Media Production',
        desc: 'Membuat video profil lembaga kampus sebagai proyek tugas media produksi. Meliputi perencanaan, shooting, dan editing menggunakan software editing video.',
        tags: ['Video', 'Production', 'Editing'],
        color: '#FFF0F6',
    },
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <div className="pill">💼 Karya</div>
                <h2 className="section-title">Projek & <span className="title-accent">Karya</span></h2>
                <p className="section-subtitle">Beberapa karya yang telah saya buat dengan sepenuh hati 💖</p>

                <div className={styles.grid}>
                    {projects.map((proj, i) => (
                        <div key={i} className={styles.card} style={{ '--card-bg': proj.color }}>
                            <div className={styles.cardTop} style={{ background: proj.color }}>
                                <span className={styles.emoji}>{proj.emoji}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <span className={styles.category}>{proj.category}</span>
                                <h3 className={styles.title}>{proj.title}</h3>
                                <p className={styles.desc}>{proj.desc}</p>
                                <div className={styles.tags}>
                                    {proj.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

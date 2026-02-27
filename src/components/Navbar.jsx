import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('#hero');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (href) => {
        setActive(href);
        setMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                <a href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
                    🌸 <span>Tasya</span>
                </a>

                {/* Desktop Links */}
                <ul className={styles.links}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.link} ${active === link.href ? styles.active : ''}`}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a href="#contact" className={`btn btn-primary ${styles.cta}`} onClick={() => handleNav('#contact')}>
                    Hire Me ✨
                </a>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
                {navLinks.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`${styles.mobileLink} ${active === link.href ? styles.active : ''}`}
                        onClick={() => handleNav(link.href)}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#contact" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => handleNav('#contact')}>
                    Hire Me ✨
                </a>
            </div>
        </nav>
    );
}

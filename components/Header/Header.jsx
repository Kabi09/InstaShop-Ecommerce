'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { navLinks, companyInfo } from '../../data/companyData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        {/* Logo */}
        <Link href="#hero" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </span>
          <span className={styles.logoText}>Dudez</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className={styles.headerActions}>
          <Link href="#contact" className={styles.talkButton}>
            Let&apos;s Talk
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.mobileNavLink} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileDrawerFooter}>
            <Link href="#contact" className={styles.mobileTalkBtn} onClick={closeMenu}>
              Let&apos;s Talk
            </Link>
            <div className={styles.mobileContactInfo}>
              <p>Email: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
              <p>Phone: <a href={companyInfo.phoneHref}>{companyInfo.phone}</a></p>
              <p>{companyInfo.location}</p>
            </div>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
}

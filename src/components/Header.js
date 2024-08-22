import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
import logo from '../logo GD.png'

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={styles.Appheader}>
            <div className='logo-container'>
                <img src={logo} className={styles.logo} alt='logo'></img>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <a href='#contato'>Contato</a>
                    </li>
                    <li>
                        <a href='#projetos'>Projetos</a>
                    </li>
                    <li>
                        <a href='#habilidades'>Habilidades</a>
                    </li>
                    <li>
                        <a href='#inicio'>
                            <svg
                                className={styles.homeico}
                                style={{ color: "rgb(128, 0, 128)" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path
                                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                                    fill="#800080"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav className={styles.sumircomisso}>
                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    <svg
                        style={{ color: "white" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            fill="white"
                        />{" "}
                    </svg>

                </button>
                <ul className={`${styles.menu} ${menuOpen ? styles.open : styles.hidden}`}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#certificados">Certificados</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;
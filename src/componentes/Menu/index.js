import React from 'react'
import styles from './Menu.module.css';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from 'componentes/MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/sobremim">Sobre Mim</MenuLink>
            </nav>
        </header>
    )
}

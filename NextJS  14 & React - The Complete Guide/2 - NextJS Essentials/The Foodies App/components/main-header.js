import React from 'react'
import Link from 'next/link'

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <img style={{ width: '100px', height: '100px' }} src={logoImg.src} alt="A plate with food on it!" />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals' >Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community' >Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
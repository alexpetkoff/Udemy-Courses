import React from 'react'
import Link from 'next/link'

import logoImg from '@/assets/logo.png';

const MainHeader = () => {
    return (
        <header>
            <Link href='/'>
                <img style={{ width: '100px', height: '100px' }} src={logoImg.src} alt="logo" />
            </Link>
        </header>
    )
}

export default MainHeader

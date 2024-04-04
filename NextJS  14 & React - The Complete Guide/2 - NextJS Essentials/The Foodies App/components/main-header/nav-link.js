'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './nav-link.module.css';


const NavLink = ({ href, children }) => {
    const path = usePathname();

    return (
        <Link className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link} href={href} >{children}</Link>
    )
}

export default NavLink

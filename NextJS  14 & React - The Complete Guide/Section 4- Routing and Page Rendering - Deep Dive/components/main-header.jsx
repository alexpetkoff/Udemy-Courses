import Link from "next/link";
import React from "react";
import NavLink from "./nav-links";

function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <ul>
                <li>
                    <NavLink href="/news">News</NavLink>
                </li>
                <li>
                    <NavLink href="/archive">Archive</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default MainHeader;

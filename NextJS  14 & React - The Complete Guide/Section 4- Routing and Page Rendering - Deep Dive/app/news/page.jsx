import Link from "next/link";
import React from "react";

function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                <li>
                    <Link href="/news/link-1">Link 1</Link>
                </li>
                <li>
                    <Link href="/news/link-2">Link 2</Link>
                </li>
                <li>
                    <Link href="/news/link-3">Link 3</Link>
                </li>
            </ul>
        </>
    );
}

export default NewsPage;

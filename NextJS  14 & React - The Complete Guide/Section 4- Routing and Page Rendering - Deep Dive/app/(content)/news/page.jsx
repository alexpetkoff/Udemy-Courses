"use client";

import React, { useEffect, useState } from "react";
import NewsList from "@/components/news-list";

function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const res = await fetch("http://localhost:8080/news");
            console.log(res);
            if (!res.ok) {
                setError("Failed to fetch data!");
                setIsLoading(false);
            }

            const news = await res.json();
            setIsLoading(false);
            setNews(news);
        }
        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    let newsContent;

    if (news) {
        newsContent = <NewsList news={news} />;
    }

    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}

export default NewsPage;

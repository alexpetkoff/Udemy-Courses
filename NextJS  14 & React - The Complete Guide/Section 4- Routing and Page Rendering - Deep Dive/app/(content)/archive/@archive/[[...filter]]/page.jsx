import NewsList from "@/components/news-list";
import { Suspense } from "react";
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

async function FilterHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();

    let links = availableYears;

    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }

    if (year && month) {
        links = [];
    }
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = year
                            ? `/archive/${year}/${link}`
                            : `/archive/${link}`;

                        return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

async function FilteredNews({ year, month }) {
    let news;

    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    return newsContent;
}

export default async function FilteredNewsPage({ params }) {
    const selectedYear = params.filter?.[0];
    const selectedMonth = params?.filter?.[1];
    const availableYears = await getAvailableNewsYears();

    if (
        (selectedYear && !availableYears.includes(selectedYear)) ||
        (selectedMonth &&
            !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
    ) {
        throw new Error("Invalid filter.");
    }

    return (
        <>
            <Suspense fallback={<p>Loading filters...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    );
}

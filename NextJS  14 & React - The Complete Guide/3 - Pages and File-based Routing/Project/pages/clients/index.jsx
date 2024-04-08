import Link from "next/link";

function ClientsPage() {
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href="clients/alexander-petkov">
                        Alexander Petkov{" "}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default ClientsPage;

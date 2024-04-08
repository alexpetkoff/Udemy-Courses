import { useRouter } from "next/router";

function ClientsProjectPage() {
    const router = useRouter();

    return (
        <div>
            <h1>The Projects of a given Client!</h1>
        </div>
    );
}

export default ClientsProjectPage;

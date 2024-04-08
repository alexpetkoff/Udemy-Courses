import { useRouter } from "next/router";

function SelectedClientProjectPage() {
    const router = useRouter();

    return (
        <div>
            <h1>
                The Project Page for a specific project for a Selected Client
            </h1>
        </div>
    );
}

export default SelectedClientProjectPage;

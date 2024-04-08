import { useRouter } from "next/router";

function OpenedBlogPost() {
    const router = useRouter();

    const query = router.query.slug;

    console.log(query);

    const renderQueries = () => {
        return query?.map((el, index) => {
            return <p key={index}>{el}</p>;
        });
    };

    return (
        <div>
            <h1>This is a concrete blog post for {renderQueries()}</h1>
        </div>
    );
}

export default OpenedBlogPost;

import React from "react";

const NewsDetailPage = ({ params }) => {
    return (
        <div id="home">
            <h1>This is {params.id} news page</h1>
        </div>
    );
};

export default NewsDetailPage;

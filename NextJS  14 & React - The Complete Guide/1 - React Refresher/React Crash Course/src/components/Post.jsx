const names = ["Alexander", "Alexander The Great"];

function Post({ name, text }) {
    return (
        <div>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    );
}

export default Post;

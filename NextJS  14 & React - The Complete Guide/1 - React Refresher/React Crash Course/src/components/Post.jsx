import styles from "./Post.module.css";

function Post({ name, text }) {
    return (
        <li className={styles.post}>
            <p className={styles.author}>{name}</p>
            <p className={styles.text}>{text}</p>
        </li>
    );
}

export default Post;

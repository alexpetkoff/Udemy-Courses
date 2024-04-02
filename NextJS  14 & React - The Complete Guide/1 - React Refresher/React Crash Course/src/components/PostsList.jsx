import React from "react";
import styles from "./PostsList.module.css";
import Post from "./Post";

const PostsList = () => {
    return (
        <ul className={styles.posts}>
            <Post name="Aleksandar" text="ReactJS is awesome!" />
            <Post name="Maximilian" text="Glad you like it!!" />
        </ul>
    );
};

export default PostsList;

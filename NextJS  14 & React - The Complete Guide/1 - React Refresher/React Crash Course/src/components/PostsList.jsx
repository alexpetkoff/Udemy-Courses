import React from "react";
import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

const PostsList = () => {
    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post name="Aleksandar" text="ReactJS is awesome!" />
                <Post name="Maximillian" text="Glad you like it!!" />
            </ul>
        </>
    );
};

export default PostsList;

import React from "react";
import { useState, useEffect } from "react";

import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

const PostsList = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        setPosts([postData, ...posts]);
    }

    function hideModalHandler() {
        setIsVisible(!isVisible);
    }

    function changeBodyHandler(event) {
        const value = event.target.value;
        setTextValue(value);
    }

    function changeNameHandler(event) {
        const value = event.target.value;
        setNameValue(value);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        const postData = {
            text: textValue,
            name: nameValue,
        };
        setTextValue("");
        setNameValue("");
        addPostHandler(postData);
        setIsVisible(false);
    }

    return (
        <>
            <MainHeader onCreatePost={hideModalHandler} />

            {isVisible && (
                <Modal onClose={hideModalHandler} isVisible={isVisible}>
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onNameChange={changeNameHandler}
                        onFormSubmit={formSubmitHandler}
                        onCancel={() => setIsVisible(false)}
                        text={textValue}
                        name={nameValue}
                    />
                </Modal>
            )}

            <ul className={styles.posts}>
                {posts.map((post, index) => {
                    return (
                        <Post key={index} name={post.name} text={post.text} />
                    );
                })}
                {posts.length === 0 && (
                    <div
                        style={{
                            textAlign: "center",
                            fontWeight: "700",
                        }}
                    >
                        <p>No posts yet...</p>
                        <p>Be the first one!</p>
                    </div>
                )}
            </ul>
        </>
    );
};

export default PostsList;

import React from "react";
import { useState } from "react";

import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

const PostsList = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");

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
                        text={textValue}
                        name={nameValue}
                    />
                </Modal>
            )}

            <ul className={styles.posts}>
                <Post name={nameValue} text={textValue} />
                <Post name="Alex" text="Welcome to Udemy course...." />
            </ul>
        </>
    );
};

export default PostsList;

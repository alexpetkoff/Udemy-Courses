import React from "react";
import { useState } from "react";

import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

const PostsList = () => {
    const [textValue, setTextValue] = useState("");
    const [nameValue, setNameValue] = useState("");

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
        console.log(textValue, nameValue);
        setNameValue("");
        setTextValue("");
    }

    return (
        <>
            <NewPost
                onBodyChange={changeBodyHandler}
                onNameChange={changeNameHandler}
                onFormSubmit={formSubmitHandler}
                text={textValue}
                name={nameValue}
            />
            <ul className={styles.posts}>
                <Post name="Aleksandar" text="ReactJS is awesome!" />
                <Post name="Maximillian" text="Glad you like it!!" />
            </ul>
        </>
    );
};

export default PostsList;

import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost() {
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
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    id="body"
                    required
                    rows={3}
                    onChange={changeBodyHandler}
                    value={textValue}
                />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input
                    onChange={changeNameHandler}
                    type="text"
                    id="name"
                    required
                    value={nameValue}
                />
            </p>
        </form>
    );
}

export default NewPost;

import styles from "./NewPost.module.css";

function NewPost({
    onBodyChange,
    onNameChange,
    onFormSubmit,
    text,
    name,
    onCancel,
}) {
    return (
        <form onSubmit={onFormSubmit} className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    id="body"
                    required
                    rows={3}
                    onChange={onBodyChange}
                    value={text}
                />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input
                    onChange={onNameChange}
                    type="text"
                    id="name"
                    required
                    value={name}
                />
            </p>
            <p className={styles.actions}>
                <button onClick={onCancel} type="button">
                    Cancel
                </button>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

export default NewPost;

import PostForm from "@components/PostForm"
import styles from "./create.module.css"

export default function PostsCreatePage() {

    return (
        <div className={styles.postCreate}>
            <h1>Add a new post</h1>
            <PostForm/>
        </div>
    )
}
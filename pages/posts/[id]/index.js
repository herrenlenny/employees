import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {deletePost, getPostById} from "@lib/api";
import styles from "./index.module.css"
import Link from "next/link"


export default function PostPage() {
    const router = useRouter()
    const {id} = router.query
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (!id) return
        const loadPost = async () => {
            try {
                const post = await getPostById(id)
                setPost(post)
            } catch (e) {
                if (e.status === 404) router.push("/404")
            }
        }
        loadPost()
    }, [id, router])


    return !post ? null : (
        <article className={styles.article}>
            <h1 className={styles.PostName}>{post.title}</h1>
            <article>
                <h2>{"Description:"}</h2>
                <p className={styles.description}>{post.description}</p>
            </article>
            <div className={styles.deleteAndeBackLink}>


                <a className={styles.deleteLink} href="#" onClick={async (e) => {
                    if (confirm("Delete Post?")) {
                        await deletePost(post.id)
                        alert("Post deleted!")
                        router.push("/")
                    }
                }}>Delete</a>

                <Link href={`/`} passHref>
                    <a className={styles.backLink}>back</a>
                </Link>


            </div>

        </article>
    )
}
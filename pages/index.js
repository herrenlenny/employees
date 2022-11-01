import {deletePost, getAllPosts} from "@lib/api";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import styles from "@components/SearchList.module.css";
import Link from "next/link";

export default function IndexPage() {

    const [posts, setPosts] = useState([]);
    const router = useRouter();
    const [searchFilter, setSearchFilter] = useState("")

    useEffect(() => {
        const loadPost = async () => {
            try {
                const posts = await getAllPosts()
                setPosts(posts);

            } catch (e) {
                if (e.status === 404) router.push("/404")
            }
        }
        loadPost()
    }, [])

    const handleChange = (e) => {
        setPosts([...posts])
        setSearchFilter(e.target.value)
    }
    return (
        <>
            <div className={styles.divBackButtonInput}>
                <div className={styles.buttonReverseAndSearchInput}>
                    <input className={styles.inputSearch} placeholder="search..." value={searchFilter}
                           onChange={handleChange}/>
                    <button className={styles.buttonReverse} onClick={() => setPosts([...posts.reverse()])}>⇅</button>
                </div>
            </div>
            <div className={styles.grid}>
                {posts.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase())).map((post) => {
                        return (
                            <>
                                <div className={styles.articlePosts} key={post.id}>
                                    <div>
                                        <h2 className={styles.postName}>{post.title}</h2>
                                    </div>


                                    <div className={styles.article}>

                                        <div className={styles.descriptionAndReadMoreLink}>
                                            <p className={styles.description}>{post.description.slice(0, 400) + "..."}</p>

                                            <Link href={`/posts/${post.id}`}>
                                                <a className={styles.readMore}>read more...</a>
                                            </Link>
                                        </div>

                                    </div>

                                    <a className={styles.deleteLink} href="#" onClick={async (e) => {
                                        if (confirm("Delete Post?")) {
                                            await deletePost(post.id)
                                            console.log("here" + now)
                                            alert("Post deleted!")
                                            router.push("/")
                                        }
                                    }}>Delete</a>
                                </div>
                            </>
                        )
                    }
                )}
            </div>


        </>
    )
}

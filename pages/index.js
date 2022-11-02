import {deletePost, getAllPosts, getPostById} from "@lib/api";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import styles from "./index.module.css"
import Link from "next/link";
import db from "@lib/database/db.json"

export default function IndexPage() {

    const router = useRouter();
    const [searchFilter, setSearchFilter] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPost = async () => {

            try {
                const post = JSON.parse(localStorage.getItem("posts"))
                setPosts(post)

            } catch (e) {
                if (e.status === 404) router.push("/404")
                console.log("here")
            }
        }
        loadPost()
    }, [])

    const handleChange = (e) => {
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
                                            let newArray = [];
                                            for(let i = 0; i < posts.length; i++){
                                                if(posts[i].id !== post.id){
                                                    console.log(i)
                                                    newArray.push(posts[i])
                                                }
                                            }
                                            localStorage.setItem("posts", JSON.stringify(newArray));
                                            await router.push("/")
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

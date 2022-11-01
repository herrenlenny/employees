import {createPost} from "@lib/api";
import {useRouter} from "next/router"
import {useState} from "react"
import styles from "./postForm.module.css"

const defaultModel = {
    title: "",
    description: "",
}

function validateModel(posts) {
    const errors = {
        title: "",
        description: "",
    }
    let isValid = true

    if (posts.title.trim().length === 0) {
        console.log("here")
        errors.title = "Post can't be empty"
        isValid = false
    }

    if (posts.title.trim().length > 45) {
        errors.title = "description can't be longer than 45"
        isValid = false;
    }

    if (posts.description.trim().length === 0) {
        errors.description = "description can't be empty"
        isValid = false;
    }


    if (posts.description.trim().length > 1000) {
        errors.description = "description can't be longer than 1000"
        isValid = false;
    }

    return {errors, isValid}
}

export default function postForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState(defaultModel)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPosts] = useState(defaultModel)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPosts({
            ...posts,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(posts)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }
        console.log("here")

        const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        })

        await createPost(posts)
        alert("posts created!")
        router.push(`/`)
        setIsLoading(false)
    }

    return (
        <div className={styles.postsForm}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={posts.title}/>
                    {errors.title && <div className={styles.error}>{errors.title}</div>}
                </fieldset>

                <fieldset>
                    <label>Description:</label>
                    <textarea name="description" onChange={handleChange} value={posts.description}/>
                    {errors.description && <div className={styles.error}>{errors.description}</div>}
                </fieldset>

                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </div>
    )
}
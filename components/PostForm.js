import {createPost} from "@lib/api";
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import styles from "./PostForm.module.css"
import db from "@lib/database/db.json"

const defaultModel = {
    title: "",
    description: "",
}

let number = 0;

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
    const [post, setPost] = useState(defaultModel)



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([]);



    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        number += 1
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }
        console.log(post.title)
        console.log(post.description)



        //let jsonStr = db.posts;
        //const parsed = JSON.parse(newObject);
        //parsed.length
//
        //for(let i=0; i<parsed.length; i++)
        //{
        //    Object.keys(db.posts[i]).length;
        //}

        const newObject = '{"id": +, "title": '+ post.title.toString() + ', "description": '+ post.description.toString()+'}';
        localStorage.setItem(number.toString(), JSON.stringify(newObject));

        alert("posts created!")
        router.push(`/`)
        setIsLoading(false)
    }
    const newObject = '{"id": 2, "title": '+ post.title.toString() + ', "description": '+ post.description.toString()+'}';

    return (
        <div className={styles.postsForm}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={post.title}/>
                    {errors.title && <div className={styles.error}>{errors.title}</div>}
                </fieldset>

                <fieldset>
                    <label>Description:</label>
                    <textarea name="description" onChange={handleChange} value={post.description}/>
                    {errors.description && <div className={styles.error}>{errors.description}</div>}
                </fieldset>

                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </div>
    )
}
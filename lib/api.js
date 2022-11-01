const URL = "http://localhost:3001"

export async function getAllPosts() {
    const response = await fetch(`${URL}/posts`)
    return await response.json()
}


export async function getPostById(id) {
    const response = await fetch(`${URL}/posts/${id}`)

    if (!response.ok) {
        return Promise.reject(response)
    }


    const data = await response.json()
    return data
}

export async function createPost(post, token) {
    const response = await fetch(`${URL}/posts`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function deletePost(id, token) {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        return Promise.reject(response)
    }
}

import * as api from '../../API/api'

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({
            type: "FETCH_ALL",
            payLoad: {
                posts: { data }
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}



export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({
            type: "CREATE",
            payLoad: {
                posts: { data }
            }
        })
    } catch (err) {
        console.log(err)
    }
}



export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({
            type: "UPDATE",
            payLoad: {
                posts: { data }
            }
        })
    } catch (err) {
        console.log(err)
    }
}



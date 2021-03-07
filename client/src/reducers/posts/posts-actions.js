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
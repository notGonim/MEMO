
const INITIAL_STATE = {
    posts: []
}


const postReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case 'FETCH_ALL':
            return {
                ...state,
                posts: actions.payLoad.posts
            };
        case 'CREATE':
            return {
                ...state,
                posts: actions.payLoad.posts
            };
        default:
            return state;
    }
}

export default postReducer
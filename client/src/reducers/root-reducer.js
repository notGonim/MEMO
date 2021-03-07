import { combineReducers } from "redux";
import postReducer from "./posts/posts-reducers";





const rootReducer = combineReducers({
    posts: postReducer
})



export default rootReducer
import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from './post/Post'
import useStyle from './Styles'


export const Posts = () => {

    const classes = useStyle()
    const posts = useSelector(state => state.posts)
    console.log(posts)
    return (
        <div>
            Posts
            <Post />
            <Post />  <Post />
        </div>
    )
}

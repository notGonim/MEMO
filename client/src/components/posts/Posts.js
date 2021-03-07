import React from 'react'
import { Post } from './post/Post'
import useStyle from './Styles'

export const Posts = () => {
    const classes = useStyle()

    return (
        <div>
            Posts
            <Post />
            <Post />  <Post />
        </div>
    )
}

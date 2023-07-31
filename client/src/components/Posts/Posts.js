import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import { styles } from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <>
            <h1>POSTS</h1>
            <Post></Post>
            <Post></Post>
        </>
    );
};

export default Posts;
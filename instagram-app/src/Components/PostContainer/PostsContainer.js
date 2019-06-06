import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from 'styled-components';

const StyledPostsContainer = styled.div`
height: 500px;
width: 50%;
margin: 5px auto;
`;

const PostsContainer = props => {
    return (
        <StyledPostsContainer>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} /> )}
        </StyledPostsContainer>
    );
};

export default PostsContainer;
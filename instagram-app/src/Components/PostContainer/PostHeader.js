    
import React from 'react';
import './Posts.css';
import styled from 'styled-components';

const StyledPostHeader = styled.div`
display: flex;
align-items: center;
margin: 5px;
`;

const StyledThumbnailWrapper = styled.div`
height: 50px;
width: 50px;
margin-right: 20px;
`;

const StyledUserName = styled.div`
display: flex;
font-size: 1.2rem;
font-weight: bold;
`;

const PostHeader = props => {
  return (
    <StyledPostHeader>
      <StyledThumbnailWrapper>
        <img
          alt="post header"
          className="post-thumbnail"
          src={props.thumbnailUrl}
        />
      </StyledThumbnailWrapper>
      <StyledUserName>{props.username}</StyledUserName>
    </StyledPostHeader>
  );
};

export default PostHeader;
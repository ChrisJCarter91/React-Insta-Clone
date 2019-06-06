import React from 'react';
import { FaRegHeart, FaComment } from 'react-icons/fa';
import styled from 'styled-components';

const StyledIconSection = styled.div`
display: flex;
flex-direction: row;
`;

const StyledPostIconWrapper = styled.div`
margin-left: 15px;
`;

const IconSection = props => {
  return [
    <StyledIconSection
      key="post-icons-container"
      onClick={props.incrementLike}
    >
      <StyledPostIconWrapper>
        <FaRegHeart />
      </StyledPostIconWrapper>
      <StyledPostIconWrapper>
        <FaComment />
      </StyledPostIconWrapper>
    </StyledIconSection>,
    <StyledIconSection key="likes-container">
      <div className="post-icon-wrapper">{props.likes}</div>
    </StyledIconSection>
  ];
};

export default IconSection;
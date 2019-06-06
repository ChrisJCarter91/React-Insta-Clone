import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

const StyledCommentText = styled.div`
display: flex;
text-align: left;
padding: 2px;
margin-left: 4px;
`;

const StyledComment = styled.span`
font-weight: 300;
font-size: 14px;
margin-left: 2%;
`;

const StyledUser = styled.span`
font-weight: 500;
font-size: 12px;
`;

const Comment = props => {
    return (
        <StyledCommentText>
            <StyledUser>{props.comment.username}</StyledUser>
            <StyledComment>{props.comment.text}</StyledComment>{''}
        </StyledCommentText>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;
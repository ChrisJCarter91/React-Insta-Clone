import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import IconSection from './IconSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './Posts.css';

const StyledPostBorder = styled.div`
border: 1px solid #d3d3d3;
margin: 5px 0;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const StyledPostImgWrapper = styled.div`
height: 100%;
width: 100%;
margin-bottom: 20px;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <StyledPostBorder>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <StyledPostImgWrapper>
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </StyledPostImgWrapper>
        <IconSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </StyledPostBorder>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
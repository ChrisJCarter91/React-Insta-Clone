import React from 'react';
import { FaRegHeart, FaComment } from 'react-icons/fa';

const IconSection = props => {
  return [
    <div
      className="post-icon-section"
      key="post-icons-container"
      onClick={props.incrementLike}
    >
      <div className="post-icon-wrapper">
        <FaRegHeart />
      </div>
      <div className="post-icon-wrapper">
        <FaComment />
      </div>
    </div>,
    <div className="post-icon-section" key="likes-container">
      <div className="post-icon-wrapper">{props.likes}</div>
    </div>
  ];
};

export default IconSection;
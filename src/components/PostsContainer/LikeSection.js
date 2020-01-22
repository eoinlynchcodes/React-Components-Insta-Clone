import React, { useState } from 'react';

const LikeSection = props => {

  const [ likecount, setLikecount ] = useState(props.numberOfLikes);

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={() => setLikecount(likecount + 1)} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {likecount}
      likes</p>
</div>
  )
};

export default LikeSection;

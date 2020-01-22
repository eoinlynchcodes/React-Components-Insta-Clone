import React, { useState } from 'react';

const LikeSection = props => {

const [ likecount, setLikecount ] = useState(0);

// const likeButton = document.getElementsByClassName('likeButton');
// likeButton.addEventListener('onClick', like());

function like(event){
console.log('love heart button works.');
  return likecount + 1;
}

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart"/>
      <button onClick={like()} >Like</button>
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

// You will add code in this file

import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

const Post = props => {
  // set up state for the likes
  console.log(props.item);
  console.log('The Post page is being hit');

  return (
    <div className="post-border">
      <PostHeader
        username={props.item.username}
        thumbnailUrl={
          props.item.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.item.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.item.imageUrl}
        comments={props.item.comments}
      />
    </div>
  );
};

export default Post;

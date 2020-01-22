//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import LikeSection from "./LikeSection";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {

  return (
    <div className="posts-container-wrapper">   
      {
        props.data.map((item, key) => {
          return <Post item={item} key={key}/>
        })
      }
    </div>
  );
};



export default PostsPage;


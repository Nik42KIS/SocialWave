import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
  
 
     
          <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCv7gmk_Y41Na9uR5Lm8bWJkQpIu9GLCVNWg&usqp=CAU"/>
            {props.message}
             <div>
                <span>{props.likeCount} like</span>
            </div>
      
            </div>
         
  
  );
};

export default Post;

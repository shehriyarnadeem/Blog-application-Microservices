import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  const [comments, setComments] = useState(comments);

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   console.log(res, "123");
  //   setComments(res.data[postId]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderedComments =
    comments &&
    Object.values(comments).map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  const [comments, setComments] = useState(commentList);

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
    commentList &&
    Object.values(commentList).map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

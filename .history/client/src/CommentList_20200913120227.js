import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(comments, "wew");

  return <ul>'sds'</ul>;
};

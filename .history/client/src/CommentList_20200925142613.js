import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  const [comments, setComments] = useState(commentList);

  const renderedComments =
    commentList &&
    Object.values(commentList).map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  console.log(commentList, "list");
  const renderedComments =
    commentList &&
    commentList.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

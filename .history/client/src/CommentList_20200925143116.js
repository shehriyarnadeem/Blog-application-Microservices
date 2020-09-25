import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  const renderedComments =
    commentList &&
    commentList.map((comment) => {
      let content;
      if (comment.status === "approved")
        <li key={comment.id}>{comment.content}</li>;
      return <li key={comment.id}>{content}</li>;
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

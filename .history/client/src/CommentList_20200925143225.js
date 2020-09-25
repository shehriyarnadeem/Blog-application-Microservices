import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  const renderedComments =
    commentList &&
    commentList.map((comment) => {
      let content;
      if (comment.status === "approved") {
        content = comment.content;
      }

      if (comment.status === "pending") {
        content = "This comment is waiting moderation";
      }

      if (comment.status === "rejected") {
        content = "This comment was rejected";
      }
      <li key={comment.id}>{comment.content}</li>;
      return <li key={comment.id}>{content}</li>;
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

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

      return (
        <div key={comment.id}>
          <li>{content}</li>
        </div>
      );
    });

  return <ul>{renderedComments && renderedComments}</ul>;
};

import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ commentList }) => {
  const renderedComments =
    commentList &&
    commentList.map((comment) => 
      <li key={comment.id}>{comment.content}</li>;
    );

  return <ul>{renderedComments && renderedComments}</ul>;
};

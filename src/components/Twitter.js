import React, { useState } from "react";

function Twitter() {
  const [post, setPost] = useState("");

  function inputPostHandler(event) {
    let postText = event.target.value;
    setPost(postText);
  }

  return (
    <div className="twitter">
      <h1>Twitter</h1>
      <textarea
        type="text"
        className="twitter__input"
        placeholder="Write your post..."
        onChange={inputPostHandler}
      />
      <h3>{post.length}</h3>
    </div>
  );
}

export default Twitter;

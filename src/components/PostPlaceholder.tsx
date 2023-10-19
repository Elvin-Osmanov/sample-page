import React from "react";

const PostPlaceholder = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1.5rem 2rem",
        borderRadius: ".7rem",
        marginTop: "1.5rem",
      }}
    >
      <h4 className="placeholder-glow">
        <span className="placeholder col-1"></span>
        <span className="offset-1"></span>
        <span className="placeholder col-6"></span>
      </h4>
      <h4 className="placeholder-glow mt-4">
        <span className="placeholder col-6 "></span>
      </h4>
      <h1 className="placeholder-glow">
        <p className="placeholder col-12"></p>
      </h1>
      <h6 className="placeholder-glow">
        <span className="placeholder col-3 "></span>
      </h6>
    </div>
  );
};

export default PostPlaceholder;

import React from "react";

function TreeNode({ node }) {
  return (
    <div>
      <p className="text-black">{node.name}</p>
    </div>
  );
}

export default TreeNode;

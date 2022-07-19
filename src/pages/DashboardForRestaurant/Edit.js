// ElementMaker.js

import React from "react";

// Creat an ElementMaker component
function Edit(props) {
  return (
    // Render a <span> element
    <span style={{ marginLeft: "1rem" }}>
      {
        // Use JavaScript's ternary operator to specify <span>'s inner content
        props.showInputEle ? (
          <input
            type="text"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
            placeholder="Your First Name"
          />
        ) : (
          <span onDoubleClick={props.handleDoubleClick}>{props.value}</span>
        )
      }
    </span>
  );
}

export default Edit;

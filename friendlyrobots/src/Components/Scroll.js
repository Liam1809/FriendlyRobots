import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "1px solid black",
        height: "80vh",
        maxWidth: "75%",
        margin: "0 auto",
        padding: "5px",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

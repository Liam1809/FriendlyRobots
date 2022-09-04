import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "1px solid black",
        height: "80vh",
        width: "80vw",
        margin: "0 auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

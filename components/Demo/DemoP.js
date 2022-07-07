import React from "react";

const DemoP = (props) => {
  console.log("DemoOutput RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default DemoP;

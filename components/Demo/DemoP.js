import React from "react";
import DemoPC from "./DemoPC";

const DemoP = (props) => {
  console.log("DemoOutput RUNNING");
  return <DemoPC>{props.show ? "This is new!" : ""}</DemoPC>;
};

export default React.memo(DemoP);

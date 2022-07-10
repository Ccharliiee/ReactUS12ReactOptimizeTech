import React, { useMemo } from "react";
import DemoPC from "./DemoPC";
import styles from "./DemoP.module.css";

const DemoP = (props) => {
  console.log("DemoOutput RUNNING");
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("sorting items! ");
    return items.sort((a, b) => a - b);
  }, [items]);
  return (
    <DemoPC>
      {" "}
      <div className={styles.list}>
        <h2>{props.title}</h2>
        <ul>
          {sortedList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </DemoPC>
  );
};

export default React.memo(DemoP);

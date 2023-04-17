import React from "react";
import classes from "$/styles/ScrollContainer.module.scss";

function ScrollContainer({ children }: any) {
  return <div className={classes.scrollXContainer}>{children}</div>;
}

export default ScrollContainer;

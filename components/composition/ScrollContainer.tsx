import React from "react";

import classes from "$/styles/composition/Layout.module.scss";

function ScrollContainer({ children }: { children: any }) {
  return <div className={classes.scrollContainer}>{children}</div>;
}

export default ScrollContainer;

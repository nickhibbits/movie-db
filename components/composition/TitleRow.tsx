import React from "react";

import classes from "$/styles/Layout.module.scss";

function TitleRow({ children, key }: { children: any; key: string }) {
  return (
    <div className={classes.titleRow} key={key}>
      {children}
    </div>
  );
}

export default TitleRow;

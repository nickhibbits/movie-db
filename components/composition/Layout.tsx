import React from "react";
import classes from "$/styles/Layout.module.scss";

function Layout({ children }: any) {
  return <main className={`${classes.layout}`}>{children}</main>;
}

export default Layout;

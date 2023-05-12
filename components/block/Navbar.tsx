import React from "react";

import classes from "$/styles/block/Nav.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav_options_wrapper}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

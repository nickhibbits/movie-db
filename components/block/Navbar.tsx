import React from "react";

import classes from "$/styles/block/Nav.module.scss";
import Link from "next/link";
import { useAuth } from "$/state/AppContextWrapper";

function Navbar() {
  const { loggedIn, setLoggedIn } = useAuth();

  if (loggedIn) {
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

  return null;
}

export default Navbar;

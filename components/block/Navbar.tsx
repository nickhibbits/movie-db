import React from "react";

import classes from "$/styles/block/Nav.module.scss";
import Link from "next/link";
import { useAuth } from "$/state/AppContextWrapper";
import { lengthCheck } from "$/utils/helpers";

function Navbar() {
  const { user } = useAuth();

  if (user && "username" in user) {
    const activeUser = lengthCheck(user);

    if (activeUser) {
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
          <div className={classes.auth_wrapper}>{user.username}</div>
        </nav>
      );
    }

    return null;
  }
}

export default Navbar;

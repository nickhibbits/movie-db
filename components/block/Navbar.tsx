import React from "react";

import classes from "$/styles/block/Nav.module.scss";
import Link from "next/link";
import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";

function Navbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setUser && setUser({});
    router.replace("./login");
  };

  if (user && "username" in user) {
    return (
      <nav className={classes.nav}>
        <ul className={classes.nav_options_wrapper}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li className={classes.auth_wrapper}>
            {user.username}{" "}
            <span className={classes.logout_button} onClick={handleLogout}>
              Logout
            </span>
          </li>
        </ul>
      </nav>
    );
  }

  return null;
}

export default Navbar;

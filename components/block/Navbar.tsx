import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";

import classes from "$/styles/block/Nav.module.scss";
import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  const { user, clearUser } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    clearUser();
    router.replace("./login");
  };

  if (user) {
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

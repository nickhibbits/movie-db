import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";

import { users } from "$/constants/dummy";
import { useEffect } from "react";

import LoginForm from "$/components/block/LoginForm";

import layout from "$/styles/composition/Layout.module.scss";

function Login() {
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    setUser && setUser({});
  }, []);

  const checkAuth = ({
    username,
    password,
  }: {
    username: string | null;
    password: string | null;
  }) => {
    const authMatch = Object.values(users).find((user) => {
      if (user.username === username) {
        if (user.password === password) {
          return true;
        }
      }
    });

    if (!authMatch) {
      return alert(
        "password or username don't match an existing user record. Try again."
      );
    }

    setUser && setUser(authMatch);
    router.push("/");
  };

  return (
    <main className={layout.layout_no_nav}>
      <LoginForm checkAuth={checkAuth} />
    </main>
  );
}

export default Login;

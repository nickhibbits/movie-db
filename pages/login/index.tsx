import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";

import Layout from "$/components/composition/Layout";
import LoginForm from "$/components/block/LoginForm";
import { users } from "$/constants/dummy";
import { useEffect } from "react";

function Login() {
  const router = useRouter();
  const { loggedIn, setLoggedIn } = useAuth();

  useEffect(() => {
    if (loggedIn) {
      setLoggedIn(false);
    }
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

    setLoggedIn(true);
    router.push("/");
  };

  return (
    <Layout>
      <LoginForm checkAuth={checkAuth} />
    </Layout>
  );
}

export default Login;

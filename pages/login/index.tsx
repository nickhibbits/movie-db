import Layout from "$/components/composition/Layout";
import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";
import React from "react";

function Login() {
  const router = useRouter();
  const { loggedIn, setLoggedIn } = useAuth();

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoggedIn(true);
    router.push("/");
  };

  return (
    <Layout>
      <form onSubmit={(e) => handleLogin(e)}>
        <button>Login</button>
      </form>
    </Layout>
  );
}

export default Login;

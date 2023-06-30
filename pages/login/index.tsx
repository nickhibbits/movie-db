import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";

import Layout from "$/components/composition/Layout";
import LoginForm from "$/components/block/LoginForm";

function Login() {
  const router = useRouter();
  const { setLoggedIn } = useAuth();

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoggedIn(true);
    router.push("/");
  };

  return (
    <Layout>
      <LoginForm handleLogin={handleLogin} />
    </Layout>
  );
}

export default Login;

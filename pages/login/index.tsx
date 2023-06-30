import { useAuth } from "$/state/AppContextWrapper";
import { useRouter } from "next/router";

import Layout from "$/components/composition/Layout";
import classes from "$/styles/block/Login.module.scss";

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
      <div className={classes.form_wrapper}>
        <form className={classes.login_form} onSubmit={(e) => handleLogin(e)}>
          <div className={classes.input_wrapper}>
            <label htmlFor="" className={classes.form_label}>
              Username
            </label>
            <input type="text" className={classes.form_input} />
          </div>
          <div className={classes.input_wrapper}>
            <label htmlFor="" className={classes.form_label}>
              Password
            </label>
            <input type="text" className={classes.form_input} />
          </div>
          <div className={classes.button_wrapper}>
            <button className={classes.form_button}>Login</button>
            <button className={classes.form_button}>Create Account</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;

import React, { useRef } from "react";
import classes from "$/styles/block/Login.module.scss";

function LoginForm({ checkAuth }: { checkAuth: any }) {
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (passwordRef.current && usernameRef.current) {
      const password = passwordRef.current;
      const username = usernameRef.current;

      checkAuth({ password, username });
    }
  };

  return (
    <div className={classes.form_wrapper}>
      <form className={classes.login_form} onSubmit={(e) => handleLogin(e)}>
        <div className={classes.input_wrapper}>
          <label htmlFor="" className={classes.form_label}>
            Username
          </label>
          <input type="text" ref={usernameRef} className={classes.form_input} />
        </div>
        <div className={classes.input_wrapper}>
          <label htmlFor="" className={classes.form_label}>
            Password
          </label>
          <input type="text" ref={passwordRef} className={classes.form_input} />
        </div>
        <div className={classes.button_wrapper}>
          <button className={classes.form_button}>Login</button>
          <button className={classes.form_button}>Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

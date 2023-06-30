import React from "react";
import classes from "$/styles/block/Login.module.scss";

function LoginForm({ handleLogin }: { handleLogin: any }) {
  return (
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
  );
}

export default LoginForm;

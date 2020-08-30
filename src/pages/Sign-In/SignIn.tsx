import React, { useState, useEffect } from "react";
import styles from "pages/Sign-In/SignIn.module.scss";
import { Title } from "../../components/Title/Title";
import { ReactComponent as UnlockLogo } from "assets/unlock.svg";
import { Button } from "components/Button/Button";

export const SignIn = () => {
  const [signInText, setSignInText] = useState("Sign In");
  const [questionText, setQuestionText] = useState("Don't have an account?");
  const [switchUserTypeText, setSwitchUserTypeText] = useState("Create One");
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    if (isNewUser) {
      setSignInText("Create Account");
      setQuestionText("Already have an account?");
      setSwitchUserTypeText("Sign In");
    } else {
      setSignInText("Sign In");
      setQuestionText("Don't have an account");
      setSwitchUserTypeText("Create One");
    }
  }, [isNewUser]);

  const toggleIsNewUser = () => {
    setIsNewUser((prevState) => !prevState);
  };

  const handleSignInButtonClick = () => {
    console.log("hello there");
  };

  return (
    <div className={styles.container}>
      <Title>Simplist</Title>
      <UnlockLogo className={styles.logo} />
      <form className={styles["sign-in-form"]}>
        <section className={styles["form-control-section"]}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
        </section>
        <section className={styles["form-control-section"]}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />
        </section>
        <Button onClick={handleSignInButtonClick}>{signInText}</Button>
        <p className={styles["account-question"]}>{questionText}</p>
        <button
          onClick={toggleIsNewUser}
          className={styles["account-question-button"]}
          type="button"
        >
          {switchUserTypeText}
        </button>
      </form>
    </div>
  );
};

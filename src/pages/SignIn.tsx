import React, { useState, useEffect } from "react";
import { Title } from "components/Title";
import { ReactComponent as UnlockLogo } from "assets/unlock.svg";
import { Button } from "components/Button";
import styled from "styled-components";
import { firebase } from "firebaseSetup/config";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
  const [signInText, setSignInText] = useState("Create Account");
  const [questionText, setQuestionText] = useState("Already have an account?");
  const [switchUserTypeText, setSwitchUserTypeText] = useState("Sign In");
  const [isNewUser, setIsNewUser] = useState(true);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const history = useHistory();

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

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isNewUser) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailText, passwordText);
    } else {
      await firebase.auth().signInWithEmailAndPassword(emailText, passwordText);
    }

    history.push("/app");
  };

  return (
    <Container>
      <Title>Simplist</Title>
      <Logo />
      <Form onSubmit={(e) => handleFormSubmission(e)}>
        <FormSection>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            required
          />
        </FormSection>
        <FormSection>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={passwordText}
            onChange={(e) => setPasswordText(e.target.value)}
            required
          />
        </FormSection>
        <Button>{signInText}</Button>
        <AccountQuestion>{questionText}</AccountQuestion>
        <AccountQuestionButton onClick={toggleIsNewUser} type="button">
          {switchUserTypeText}
        </AccountQuestionButton>
      </Form>
    </Container>
  );
};

const Logo = styled(UnlockLogo)`
  margin: 2.25rem 0;
`;

const AccountQuestion = styled.p`
  color: var(--white);
  text-align: center;
  margin-bottom: 0;
`;

const AccountQuestionButton = styled.button`
  border: none;
  background: none;
  font-weight: 700;
  color: var(--white);
  font-size: 1.125rem;
  align-self: center;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  label {
    margin-bottom: 1rem;
    display: block;
    width: 100%;
    color: var(--white);
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    font-size: 1rem;
    padding: 1rem 0.5rem;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    border: none;
  }
`;

import React, { useState, useEffect } from "react";
import { Title } from "components/Title";
import { ReactComponent as UnlockLogo } from "assets/unlock.svg";
import { Button } from "components/Button";
import styled from "styled-components";

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
    <Container>
      <Title>Simplist</Title>
      <Logo />
      <Form>
        <FormSection>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
        </FormSection>
        <FormSection>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />
        </FormSection>
        <Button onClick={handleSignInButtonClick}>{signInText}</Button>
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
  padding: 0 4rem;
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
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    border: none;
  }
`;

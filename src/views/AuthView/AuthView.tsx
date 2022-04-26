import React from "react";

import {
  BackDrop,
  Container,
  HeaderContainer,
  HeaderImage,
  HeaderText,
  InnerContanier,
  TopContainer,
} from "./AuthView.style";

import SigninForm from "../../components/SigninForm";
import SignupForm from "../../components/SignupForm";

import SigninSvg from "../../assets/signin.svg";
import SignupSvg from "../../assets/signup.svg";

type AuthViewProps ={
  isExpanded: boolean,
  active: string
}

function AuthView({isExpanded, active}:AuthViewProps) {
  return (
      <Container>
        <TopContainer>
          <BackDrop data-testid='backdrop' isExpanded={isExpanded}></BackDrop>
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Área de Login</HeaderText>
              <HeaderImage src={SigninSvg} alt="Auth" />
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Área de Cadastro</HeaderText>
              <HeaderImage src={SignupSvg} alt="Auth" />
            </HeaderContainer>
          )}
        </TopContainer>

        <InnerContanier >
          {active === "signin" && <SigninForm />}
          {active === "signup" && <SignupForm />}
        </InnerContanier>

      </Container>
  );
}

export default AuthView;

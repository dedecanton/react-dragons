import React, { useContext, useEffect, useState } from "react";

//components
import {
  AlternativeText,
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  FailMessage,
  ValidationMessage,
} from "../common";

import ButtonGoogle from "../ButtonGoogle/ButtonGoogle";

// Context
import { FormsContext } from "../../contexts/forms-context";
import { AuthContext } from "../../contexts/auth-context";

// Form validation
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// auth
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";

// types
type UserSubmitData = {
  email: string;
  password: string;
};

function SigninForm() {
  // contexts
  const { switchToSignup } = useContext(FormsContext);
  const { setUserToken } = useContext(AuthContext);

  // validations
  const schema = yup.object().shape({
    email: yup.string().email('*Email inválido').required('*Você deve inserir seu email!'),
    password: yup.string().required('*Você deve inserir sua senha!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitData>({ resolver: yupResolver(schema) });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // auth
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // handlers
  const signinHandler = (data: UserSubmitData) => {
    const { email, password } = data;

    signInWithEmailAndPassword(email, password);
  };
  // store token on login
  useEffect(() => {
    user?.user.getIdTokenResult().then((result) => {
      setUserToken(result.token);
    });
  }, [user, setUserToken]);

  // set FailLogin message
  useEffect(() => {
    if (!loading && error) {
      setErrorMessage("Email e/ou senha inválida!");

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  }, [error, loading]);

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(signinHandler)}>
        {errors.email?.message && (
          <ValidationMessage>{errors.email?.message}</ValidationMessage>
        )}
        <Input {...register("email")} type="email" placeholder="Email" />
        {errors.password?.message && (
          <ValidationMessage>{errors.password?.message}</ValidationMessage>
        )}
        <Input
          {...register("password")}
          type="password"
          placeholder="Senha"
        />
        <SubmitButton value='Entrar' type="submit"/>
      </FormContainer>
      {errorMessage && <FailMessage>{errorMessage}</FailMessage>}
      <MutedLink className="my-4" href="#">
        Não tem uma conta?
        <BoldLink onClick={switchToSignup}>
          Clique aqui!
        </BoldLink>
      </MutedLink>

      <AlternativeText>Entrar com google</AlternativeText>

      <ButtonGoogle />
    </BoxContainer>
  );
}

export default SigninForm;

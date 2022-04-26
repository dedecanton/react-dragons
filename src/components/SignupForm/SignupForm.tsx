import React, { useContext, useEffect, useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// components
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  SuccessMessage,
  FailMessage,
  ValidationMessage,
} from "../common";

// context
import { FormsContext } from "../../contexts/forms-context";

// auth
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";

// types
type UserSubmitData = {
  email:string,
  password:string,
  confirmPassword: string
}

function SignupForm() {
  // contexts
  const { switchToSignin } = useContext(FormsContext);

  // validation
  const [successMessage, setSuccessMessage] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("*Email inválido")
      .required("*Você deve inserir um email!"),
    password: yup
      .string()
      .min(6, "*A senha deve ter no mínimo 6 caracteres!")
      .max(32, "*A senha deve ter no máximo 32 caracteres!")
      .required("*Você deve inserir sua senha!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "*As senhas devem ser iguais!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitData>({ resolver: yupResolver(schema) });

  // create user
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  // handlers
  const signupHandler = (data:UserSubmitData) => {
    const {email, password} = data
    createUserWithEmailAndPassword(email,password)
  };

  // set success or failed message on signup
  useEffect(() => {
    if (user && !error) {
      setSuccessMessage('Conta cadastrada com sucesso!');
    }

    if (!loading && error) {
      if(error.message.includes('email-already-in-use')){
        setErrorMessage('Esse email já está em uso!')
      }else{
        setErrorMessage('Opa! Ocorreu um erro, tente novamente mais tarde ou verifique as informações inseridas!');
      }
    }
    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 5000);
  }, [user, error, loading]);

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(signupHandler)}>
        {errors.email?.message && <ValidationMessage>{errors.email?.message}</ValidationMessage>}
        <Input {...register('email')} type="email" placeholder="Email" />
        {errors.password?.message && <ValidationMessage>{errors.password?.message}</ValidationMessage>}
        <Input {...register('password')} type="password" placeholder="Senha" />
        {errors.confirmPassword?.message && <ValidationMessage>{errors.confirmPassword?.message}</ValidationMessage>}
        <Input {...register('confirmPassword')} type="password" placeholder="Confirmar senha" />
      <SubmitButton type="submit" value='Cadastrar'/>
      </FormContainer>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {errorMessage && <FailMessage>{errorMessage}</FailMessage>}
      <MutedLink className="my-4" href="#">
        Já tem uma conta?
        <BoldLink onClick={switchToSignin}>
          Clique aqui!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export default SignupForm;

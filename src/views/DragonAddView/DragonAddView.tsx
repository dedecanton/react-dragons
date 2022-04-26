import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  Input,
  SubmitButton,
  ValidationMessage,
} from "../../components/common";
import Layout from "../../components/Layout";
import DragonAddType from "../../types/DragonAddType";
import { Container } from "./DragonAddView.style";
import * as yup from "yup";
import { DragonsContext } from "../../contexts/dragons-context";
import { useState } from "react";

import { SuccessMessage } from "../../components/common";
import BackButton from "../../components/BackButton";

const DragonAddView = () => {
  // validation
  const { addDragon } = useContext(DragonsContext);
  const [success, setSuccess] = useState(false);

  type AddDragonType = {
    name: string;
    type: string;
    histories: string[];
  };

  const schema = yup.object().shape({
    name: yup.string().required("*Você deve inserir um nome ao dragão!"),
    type: yup.string().required("*Você deve inserir um tipo ao dragão!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DragonAddType>({ resolver: yupResolver(schema) });

  const handleFormSubmit = (data: DragonAddType) => {
    const { name, type } = data;

    const newDragon: AddDragonType = {
      name,
      type,
      histories: [],
    };
    addDragon(newDragon);
    reset();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Layout>
      <Container>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <FormGroup>
            <FormLabel htmlFor="name">Nome</FormLabel>
            {errors.name?.message && (
              <ValidationMessage>{errors.name?.message}</ValidationMessage>
            )}
            <Input {...register("name")} id="name" type="text" />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="type">Tipo</FormLabel>
            {errors.type?.message && (
              <ValidationMessage>{errors.type?.message}</ValidationMessage>
            )}
            <Input {...register("type")} id="type" type="text" />
          </FormGroup>
          <SubmitButton value={"Adicionar"} type="submit" />
          {success && (
            <SuccessMessage className="self-center">
              Dragão adicionado com sucesso!
            </SuccessMessage>
          )}
          <BackButton />
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default DragonAddView;

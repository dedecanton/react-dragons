import React, { useContext, useState } from "react";
// validation
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// contexts
import { DragonsContext } from "../../contexts/dragons-context";
// types
import DragonType from "../../types/DragonType";
import DragonAddType from "../../types/DragonAddType";
// components
import { Container } from "./DragonEditView.style";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  Input,
  SubmitButton,
  SuccessMessage,
  ValidationMessage,
} from "../../components/common";
import BackButton from "../../components/BackButton";

type DragonEditViewProps = {
  dragon: DragonType;
};

const DragonEditView = ({ dragon }: DragonEditViewProps) => {
  const [name, setName] = useState(dragon?.name);
  const [type, setType] = useState(dragon?.type);
  const [success, setSuccess] = useState(false);

  const { editDragon } = useContext(DragonsContext);

  const schema = yup.object().shape({
    name: yup.string().required("*Você deve inserir um nome ao dragão!"),
    type: yup.string().required("*Você deve inserir um tipo ao dragão!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DragonAddType>({ resolver: yupResolver(schema) });

  // handlers
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setName(value);
  };
  const handleTypeChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setType(value);
  };

  const handleFormSubmit = (data: DragonAddType) => {
    const { name, type } = data;

    const editedDragon = {
      ...dragon,
      name,
      type,
    };

    editDragon(editedDragon);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return dragon && (
      <Container>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <FormGroup>
            <FormLabel htmlFor="name">Nome</FormLabel>
            {errors.name?.message && (
              <ValidationMessage>{errors.name?.message}</ValidationMessage>
            )}
            <Input
              {...register("name")}
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="type">Tipo</FormLabel>
            {errors.type?.message && (
              <ValidationMessage>{errors.type?.message}</ValidationMessage>
            )}
            <Input
              {...register("type")}
              id="type"
              type="text"
              value={type}
              onChange={handleTypeChange}
            />
          </FormGroup>
          <SubmitButton type="submit" value="Salvar" />
          {success && (
            <SuccessMessage className="self-center">
              Dados alterados com sucesso!
            </SuccessMessage>
          )}

            <BackButton />
        </FormContainer>
      </Container>
  )
};

export default DragonEditView;

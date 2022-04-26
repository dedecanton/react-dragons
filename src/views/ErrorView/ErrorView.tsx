import React from "react";
import Container from "../../components/Container";
import { ErrorImage, ErrorTitle } from "./ErrorView.style";

import BackButton from "../../components/BackButton";

type ErrorViewProps = {
  text:string,
  image: string | undefined
}

const ErrorView = ({text, image}:ErrorViewProps) => {
  return (
    <Container className="justify-center items-center flex-col !max-w-none bg-white animate-fade-in-down">
      <ErrorImage>
        <img src={image} alt="" />
      </ErrorImage>
      <ErrorTitle>{text}</ErrorTitle>
      <BackButton/>
    </Container>
  );
};

export default ErrorView;

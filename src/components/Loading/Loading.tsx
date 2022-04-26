import React from "react";

import Logo from "../../assets/logo.svg";
import { ImageContainer, LoadingContainer } from "./Loading.style";

const Loading = () => {
  return (
    <LoadingContainer>
      <ImageContainer>
        <img src={Logo} alt="logo" />
      </ImageContainer>
    </LoadingContainer>
  );
};

export default Loading;

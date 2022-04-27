/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import DragonImage from "../../assets/dragon.png";
import {
  Container,
  DragonContent,
  DragonDetails,
  DragonImageContainer,
  DragonName,
} from "./DragonDetailView.style";
import { BackLink } from "../../components/common";
import DragonType from "../../types/DragonType";

type DragonDetailType = {
  dragon: DragonType;
};

const DragonPage = ({ dragon }: DragonDetailType) => {
  const fullDate = new Date(dragon.createdAt);

  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  const date = `${day}/${month}/${year}`;

  return (
    <Container>
      <DragonImageContainer>
        <img src={DragonImage} alt="Dragon" />
      </DragonImageContainer>

      <DragonContent>
        <DragonName>{dragon.name}</DragonName>
        <DragonDetails>
          <p>
            <span>Data de criação: </span>
            {date}
          </p>
          <p>
            <span>Tipo: </span>
            {dragon.type}
          </p>
          <p>
            <span>Nº Identificação: </span>
            {dragon.id}
          </p>
        </DragonDetails>
        <BackLink to={"/dragons"}>Ver todos os dragões</BackLink>
      </DragonContent>
    </Container>
  );
};

export default DragonPage;

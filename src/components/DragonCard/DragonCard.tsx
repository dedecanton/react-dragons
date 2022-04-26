import React, { useContext, useState } from "react";
import DragonType from "../../types/DragonType";
import { ActionButton, ActionsContainer, Card, CardImage, CardTitle, InfoLink } from "./DragonCard.style";





import DragonImage from "../../assets/dragon.png";
import { useNavigate } from "react-router";
import { DragonsContext } from "../../contexts/dragons-context";

type Props = {
  dragon: DragonType;
};



const DragonCard = ({ dragon }: Props) => {

  const [isDeleting, setIsDeleting] = useState(false)

  const { deleteDragon } = useContext(DragonsContext)
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/dragon/edit/${dragon.id}`)
  }

  const handleDelete = () => {

    setIsDeleting(true)
    setTimeout(() => {
      deleteDragon(dragon.id)
      setIsDeleting(false)
    },300)
  }

  return (
    <Card isDeleting={isDeleting}>
      <CardTitle>{dragon.name}</CardTitle>

      <CardImage>
        <img src={DragonImage} alt="Dragon" />
      </CardImage>

      <InfoLink to={`/dragon/${dragon.id}`}>Ver mais detalhes</InfoLink>
      
      <ActionsContainer>
        <ActionButton onClick={handleEdit}>Editar</ActionButton>
        <ActionButton onClick={handleDelete} >Deletar</ActionButton>
      </ActionsContainer>
    </Card>
  );
};

export default DragonCard;

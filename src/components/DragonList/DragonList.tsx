import React from 'react'
import sortDragons from '../../helpers/sortDragons'
import DragonType from '../../types/DragonType'
import DragonCard from '../DragonCard'
import { Container } from './DragonList.style'

type Props ={
  dragons: DragonType[]
}

const DragonList = ({dragons}:Props) => {

  if(dragons.length === 0){
    return <Container>
      <h1 className='mt-8 text-xl text-primary font-bold text-center'>Nenhum dragão encontrado!</h1>
    </Container>
  }

  return (
      
    <Container>
    {dragons.length > 0 && (
      dragons
      .sort(sortDragons)
      .map((dragon:DragonType) => <DragonCard key={dragon.id} dragon={dragon}/>)
    )}
  </Container>
  )
}

export default DragonList
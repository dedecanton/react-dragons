import React from 'react'
import ErrorView from '../views/ErrorView'

import NotFoundImage from "../assets/not-found.svg";

const NotFoundController = () => {
  return (
    <ErrorView image={NotFoundImage} text={'Ops! Página não encontrada!'}/>
  )
}

export default NotFoundController
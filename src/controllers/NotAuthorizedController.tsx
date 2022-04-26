import React from 'react'
import ErrorView from '../views/ErrorView'

import NotAuthorizedImage from "../assets/not-authorized.svg";

const NotAuthorizedController = () => {
  return (
    <ErrorView image={NotAuthorizedImage} text={'Sem autorização para acessar a página!'}/>
  )
}

export default NotAuthorizedController
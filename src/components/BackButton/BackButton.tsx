import React from 'react'

import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { Button } from './BackButton.style'

type Props = {
  text ?: string
}

const BackButton = ({text}:Props) => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/')
    }
    
  return (
    <Button onClick={handleBackClick}><IoMdArrowBack/>{text || 'Voltar'}</Button>
  )
}

export default BackButton
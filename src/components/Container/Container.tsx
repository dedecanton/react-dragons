import React from 'react'
import { ContainerStyled } from './Container.style'

type ContainerProps = {
  children: React.ReactNode
  className ?: string
}

const Container= ({children, className}:ContainerProps) => {
  return (
    <ContainerStyled className={className}>
        {children}
    </ContainerStyled>
  )
}

export default Container
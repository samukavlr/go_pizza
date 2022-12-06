import React from 'react'
import img from '../../goPizza/brand.png'



import {
  Header,
  Title,
  Photo,
  Container,
  Input,
  ContainerInput
} from './styles';




export function Dashboard() {

    return (
        <Container>
          <Header>
            <Photo source={img} />
          </Header>
          <Title  >Login</Title>
          <ContainerInput>
            <Input/> 
            <Input/> 
          </ContainerInput>

          
        </Container>
    )
}
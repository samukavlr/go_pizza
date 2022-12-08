import React from 'react'
import img from '../../goPizza/brand.png'
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';



import {
  Header,
  Title,
  Photo,
  Container,
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
            <Button/>
          </ContainerInput>

          
        </Container>
    )
}
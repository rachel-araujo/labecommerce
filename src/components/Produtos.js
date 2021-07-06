import React from 'react';
import CardProdutos from './CardProdutos'
import styled from 'styled-components'

const Section = styled.section`
  background-color: rgba(248, 248, 255, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-left:30px;
  width: 70vw;
  height: 100%;

  @media(min-width: 320px) and (max-width:420px){
      display: flex;
      flex-direction: column;
      margin-top: 90px;
  }
  
`

export default class Produtos extends React.Component {

    render(){

        return (
            
            <Section>
                {this.props.cardProdutos}
            </Section>
            
        )
    }
}
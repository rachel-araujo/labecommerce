import React from 'react';
import styled from 'styled-components'



const Img = styled.img`
  margin-top: 10px;
  width: 200px;
  height: 200px;
  `

const Descricao = styled.p`
    width: 150px;
    padding: 8px;
    box-sizing: border-box;
    color: black;
    font: bold 16px arial, sans-serif; 
  `

const Botao = styled.button`
margin-bottom:10px;
border-radius: 10px;
width: 70px;
height:30px;
cursor: pointer;
border:none;
background-color: MidnightBlue;
color: white;

`

const Card = styled.div`
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 16px;
    background-color: rgb(248, 248, 255);

    &:hover{
        box-shadow: 5px 10px 18px gray;
        cursor: pointer;
    }
  `
 

export default class CardProdutos extends React.Component {
    
    render(){
        return (
          
            <Card>
                <Img src={this.props.imageUrl}/>
                <Descricao>{this.props.name}</Descricao>
                <Descricao>{this.props.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Descricao>
                <Botao onClick={this.props.adicionarAoCarrinho}>Comprar</Botao>
            </Card>
            
        )
    }
}
    
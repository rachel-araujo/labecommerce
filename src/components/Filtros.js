import React from 'react';
import styled from 'styled-components'

const Titulo = styled.h3`

  color: white;
  font: bold 20px arial, sans-serif; 
  margin: 0 20px;

`;

const Inputs = styled.input`
    display: flex;
    flex-direction: row;

    width: 100px;
    height: 20px;
    @media(min-width: 320px) and (max-width:420px){
       width: 40%auto;
       
    }

    
`

const InputNome = styled.input`
    display: flex;
    flex-direction: row;

    width: 50%;
    height: 20px;

    @media(min-width: 320px) and (max-width:420px){
        width: 50%;
    }


  
  `

const Label = styled.label`
    display: flex;
    flex-direction: row;
    color: white;
    font: 16px arial, sans-serif; 
    margin: 0 20px;

    
  `

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-right: 40px;
    height: 20px;
    padding:10px;

    
    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: column;
        margin-top: 80px;
    }
    
`

export default class Filtros extends React.Component {
    
  

   
    render(){
        return (
            <Div>
                <Titulo>Filtros:</Titulo>
                <Label>Valor mínimo:</Label>
                
                <Inputs type='number'value={this.props.filtroMin} onChange={this.props.valorMin}></Inputs>

                <Label>Valor máximo:</Label>
                <Inputs  type='number' value={this.props.filtroMax} onChange={this.props.valorMax}></Inputs>

                <Label>Busca por nome:</Label>
                <InputNome  type='text' value={this.props.nomeProduto} onChange={this.props.produtoPorNome} placeholder='ex.: Nave espacial'></InputNome>
                <Label>Ordenação:</Label>
                <select value={this.props.ordenacao} onChange={this.props.onChangeSelect}>
                    <option value='crescente'>Crescente</option>
                    <option value='decrescente'>Decrescente</option>
                </select>
                

            </Div>
        )
    }
}
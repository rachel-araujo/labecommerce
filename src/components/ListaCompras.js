import React from 'react'
import styled from 'styled-components'

const Botao = styled.button`
margin-bottom:10px;
border-radius: 10px;
width: 70px;
height:30px;
cursor: pointer;
border:none;
background-color: MidnightBlue;
color: white;

`;

export default class ListaCompras extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.quantidade}x {this.props.name}</p>
                <Botao onClick={this.props.removerProdutoCarrinho}>Remover</Botao>
            </div>
        )
    }
}
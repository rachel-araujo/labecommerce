import React from 'react';
import styled from 'styled-components'

const Titulo = styled.h3`
 padding-top: 1px;  color: black;
  font: bold 25px arial, sans-serif; 

`

export default class Carrinho extends React.Component {
    render() {
        let valores = 0
        for (let i = 0; i < this.props.itemCarrinho.length; i++) {
            valores = valores + (this.props.itemCarrinho[i].value * this.props.itemCarrinho[i].quantidade)
        }

        return (
            <div>
                <Titulo>Carrinho</Titulo>
                {this.props.listaCompras}
                <p>{valores ? `Valor Total: ${valores.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` : ``}</p>
            </div>
        )
    }
}
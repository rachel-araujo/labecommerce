import React from 'react';
import styled from 'styled-components'

import './App.css'
import Filtros from './components/Filtros.js'
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho'
import CardProdutos from './components/CardProdutos'
import ListaCompras from './components/ListaCompras'
import astronauta from './imagens/astronauta.jpg'
import capsula from './imagens/capsula-espacial.jpg'
import estacao from './imagens/estacao-espacial2.jpg'
import foguete from './imagens/foguete.jpg'
import KitAstronautas from './imagens/kit-astronautas.png'
import KitAstro from './imagens/kit-astronautas1.png'
import KitEspacial from './imagens/kit-espacial2.jpg'
import KitExploradores from './imagens/kit-exploradores.jpg'
import OnibusEspacial from './imagens/onibus-espacial2.jpg'
import OnibusRover from './imagens/onibus-rover.jpg'
import PuzzleEspacial from './imagens/puzzle-espacial.jpg'
import RoverEspacial from './imagens/rover-espacial2.jpg'
//import SpaceDeluxe from './imagens/space-deluxe.jpg'



const Fundo = styled.body`
  width:90vw;
  height: 90vh; 
  
  @media(min-width: 320px) and (max-width:420px){
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
const Titulo = styled.h1`
  width: 400px;
  padding-top:10px;
  margin: 0 auto;
  color: white;
  font: bold 50px arial, sans-serif; 
  font-weight: 50px;
  border:black 50px;

  @media(min-width: 320px) and (max-width:420px){
    
    font-size: 30px;
    width: 100px;
  }

`
const Grid = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: auto;
	justify-content: stretch;
  

  @media(min-width: 320px) and (max-width:420px){
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

  }
  
  `
const CarrinhoDiv = styled.div`
background-color: rgba(248, 248, 255, 0.8);
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-columns: auto;
align-content: start;
border-radius: 10px;

align-items: center;
padding: 10px;
width: 20vw;
height: 216vh;
border: 1px solid black;
color: black;
font: bold 16px arial, sans-serif;
border-radius: 10px;
justify-content: space-around;
margin-left:75%; 
margin-top: 11%;
position:absolute;

@media(min-width: 320px) and (max-width:420px){
  display: flex;
  flex-direction: column;
  height: 70vh;
  position: relative;
  margin-left: 0px;
  width: 70vw;
  
}

`


export default class App extends React.Component {
 
  state = {
    
    produtos: [
      {
        id: 1,
        name: "Astronauta",
        value: 50.00,
        imageUrl: astronauta ,
      },
      {
        id: 2,
        name: "Capsula Espacial",
        value: 1000.0,
        imageUrl: capsula,
      },
      {
        id: 3,
        name: "Estação Espacial",
        value: 250.00,
        imageUrl: estacao,
      },
      {
        id: 4,
        name: "Foguete",
        value: 19.00,
        imageUrl: foguete,
      },
      {
        id: 5,
        name: "Kit Astronautas",
        value: 560.00,
        imageUrl: KitAstronautas,
      },
      {
        id: 6,
        name: "Kit Astronautas New",
        value: 710.00,
        imageUrl: KitAstro,
      },
      {
        id: 7,
        name: "Kit Espacial",
        value: 800.00,
        imageUrl: KitEspacial,
      },
      {
        id: 8,
        name: "Kit Exploradores",
        value: 940.00,
        imageUrl: KitExploradores,
      },
      {
        id: 9,
        name: "Ônibus Espacial",
        value: 35.00,
        imageUrl: OnibusEspacial,
      },
      {
        id: 10,
        name: "Ônibus Rover",
        value: 190.00,
        imageUrl: OnibusRover,
      },
      {
        id: 11,
        name: "Puzzle Espacial",
        value: 60.00,
        imageUrl: PuzzleEspacial,
      },
      {
        id: 12,
        name: "Rover Espacial",
        value: 79.00,
        imageUrl: RoverEspacial,
      },
      // {
      //   id: 13,
      //   name: "Space Deluxe",
      //   value: 450.00,
      //   imageUrl: SpaceDeluxe,
      // },
      
    ],

    lista: [],
    filtroMin: 0,
    filtroMax: 2000,
    nomeProduto: '',
    ordenacao: "decrescente"
  }

  valorMin = (event) => {
    this.setState({ filtroMin: event.target.value })

  }
  valorMax = (event) => {
    this.setState({ filtroMax: event.target.value })

  }
  produtoPorNome = (event) => {
    this.setState({ nomeProduto: event.target.value })

  }


  ordenacaoSelect = (event) => {
    this.setState({ ordenacao: event.target.value})
  }

  adicionarProduto = (id) => {
    const listaCarrinho = [...this.state.lista]

    const novaListaCarrinho = this.state.produtos.filter((produto) => {
      if (id === produto.id) {
        return true
      }
    })

    const checagem = this.state.lista.find((produtoCarrinho) => {
      if (produtoCarrinho.id === id) {
        return true
      } else { return false }
    })

    const produtoSeraAdicionado = {
      ...novaListaCarrinho[0],
      quantidade: 1
    }

    if (!checagem) {
      listaCarrinho.push(produtoSeraAdicionado)

      this.setState({ lista: listaCarrinho })
    } else {
      const adicionarQuantidade = this.state.lista.map((produtoJaAdicionado) => {
        if (produtoJaAdicionado.id === id) {
          return {
            ...produtoJaAdicionado,
            quantidade: produtoJaAdicionado.quantidade + 1
          }
        } else {
          return produtoJaAdicionado
        }
      })
      this.setState({ lista: adicionarQuantidade })
    }


  }

  removerProdutoCarrinho = (id) => {
    const novaListaCompras = this.state.lista.map((produto) => {
      if (produto.id === id) {
        const produtoAtt = {
          ...produto,
          quantidade: produto.quantidade - 1
        }
        return produtoAtt
      } else { return produto }
    })

    const novaListaComprasAtt = novaListaCompras.filter((produto) => {
      if (produto && produto.quantidade !== 0) {
        return true
      }
    })

    this.setState({ lista: novaListaComprasAtt })
  }

  render() {
    
    const valoresFiltrados = this.state.produtos.filter((produto) => {
      if (produto.value >= this.state.filtroMin) {
        return true
      } else {
        return false
      }

    })
      .filter((produto) => {
        if (produto.value <= this.state.filtroMax) {
          return true
        } else {
          return false
        }
      })
      .filter((produto) => {
        if (
          produto.name.toLowerCase()
            .includes(this.state.nomeProduto.toLowerCase())) {
          return true
        } else {
          return false
        }

      }
      )

    if (this.state.ordenacao === "crescente") {
      valoresFiltrados.sort((produto1, produto2) => {
        if (produto1.value > produto2.value) {
          return 1
        }
        if (produto1.value < produto2.value) {
          return -1
        }
        return 0
      })} else {
        valoresFiltrados.sort((produto1, produto2) => {
        if (produto1.value > produto2.value) {
          return -1
        }
        if (produto1.value < produto2.value) {
          return 1
        }
        return 0
      })} 

  return(
    <Fundo>
   
      <Grid className = "App" >
        <Titulo>Galaxy Kids </Titulo>

       
        <Filtros
          valorMin={this.valorMin}
          filtroMin={this.state.filtroMin}
          valorMax={this.valorMax}
          filtroMax={this.state.filtroMax}
          produtoPorNome={this.produtoPorNome}
          nomeProduto={this.state.nomeProduto}
          ordenacao={this.state.ordenacao}
          onChangeSelect={this.ordenacaoSelect}
        />
       
        
        <Produtos
         cardProdutos={valoresFiltrados.map((produto)=>{
          return(
            <CardProdutos
                imageUrl={produto.imageUrl}
                name={produto.name}
                value={produto.value}
                adicionarAoCarrinho={() => {this.adicionarProduto(produto.id)}}
            />
          )
        })}
        
        
         />
         <CarrinhoDiv>
        <Carrinho
          itemCarrinho={this.state.lista}
          listaCompras={this.state.lista.map((produto) => {
            return (
              <ListaCompras
                quantidade={produto.quantidade}
                name={produto.name}
                removerProdutoCarrinho={() => { this.removerProdutoCarrinho(produto.id) }}
              />)
          })}

        />
        </CarrinhoDiv>
       
       
      </Grid>
      </Fundo>
      
      
      
    )
   
  }
  
}

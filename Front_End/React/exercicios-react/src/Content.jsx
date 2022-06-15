import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const criaObjeto = ({conteudo, bloco, status}) => {
    return (
        <div className='item-obj' key={conteudo}>
        <p className='item-objetos'>O conteúdo é: {conteudo}</p>
        <p className='item-objetos'>Status: {status}</p>
        <p className='item-objetos'>Bloco: {bloco}</p>
        </div>
    )
}

const objetoList = () => {
    return (
        conteudos.map(({conteudo, bloco, status}) => {
        return criaObjeto({conteudo, bloco, status})
        })
    )
}

class Content extends React.Component {
    render() {
      return  (
        <main className='div-conteudos'>
        {objetoList()}
        </main>
        )
    }
}

export default Content
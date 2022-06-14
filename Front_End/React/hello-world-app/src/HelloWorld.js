import React from 'react';

const nomeCompleto = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`
}

class HelloWorld extends React.Component {
    render(){
    return <span>Olá, {nomeCompleto('Jéssica', 'Hermes')}! Como você se sente hoje?</span>
    }
};

export default HelloWorld;
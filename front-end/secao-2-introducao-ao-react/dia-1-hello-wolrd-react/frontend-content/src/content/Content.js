import React from "react";
import './content.css'

class Content extends React.Component {
  render () {
    const conteudos = [
      {
        nome: 'JavaScript assíncrono',
        bloco: 9,
        status: 'já aprendi'
      },
      {
        nome: 'Composição de Componentes',
        bloco: 10,
        status: 'estou aprendendo',
      },
      {
        nome: 'Composição de Estados',
        bloco: 11,
        status: 'aprenderei'
      },
      {
        nome: 'Redux',
        bloco: 15,
        status: 'aprenderei'
      },
    ];
    
    return (
      conteudos.map((conteudo) => {
        return <section className="card" key={conteudo.bloco}>
          <h3>Eu {conteudo.status}</h3>
          <p>O conteúdo {conteudo.nome}</p>
          <span>no bloco {conteudo.bloco}</span>
        </section>
      })
    );
  }
}

export default Content;
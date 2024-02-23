import React, { Component } from "react";

//Quando a classe (filho) herda de outra classe (pai), no seu constructor devemos chamar super() para a mesma herdar o constructor da classe pai.

export default class Main extends Component {
  //Só é chamado constructor para criar state e passar props
  constructor(props){
    super(props);

    this.state = {
      //Todas as chaves aqui dentro, serão o estado do componente Main. E suas
      //mudanças refletirão no seu render.
      newTask: '',
      //Sempre passar um valor inicial
    }

    //apontando o this do método inputChange() para o this do constructor (parecido com .bind do JS). Ou seja, vincula.
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event){
    //Para mudarmos os valores de chaves da state precisamos utilizar o método setState().
    this.setState({
      newTask: event.target.value,
      }
    );
  }

  render() {
    //Importanto o valor da state, com chave newTask
    // const newTask = this.state.newTask
    const { newTask } = this.state;

    return (
      //No JSX usamos className, pois class pe uma palavra reservada do html/js.
      <div className="main">
          <h1>Lista de Tarefa</h1>
          {/* Para suar js dentro do jsx precisamos colocar entre chaves "{}" */}
          <form action="#">
             <input onChange={this.inputChange} type="text" placeholder='Meu palworld na tua cara'/>{/* O evento onChange é acionado sempre que
              o valor do input é alterado, independentemente de o usuário ter concluído a edição do campo ou
              não. Isso permite que a aplicação reaja imediatamente a cada alteração do valor do input,
              atualizando o estado do componente e refletindo as alterações na interface do usuário. */}
            <button type="submit">Enviar</button>
          </form>
          <h3>{ newTask }</h3>
      </div>
    );
  }
}

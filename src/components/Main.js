import React, { Component } from 'react';
import './Main.css';

//Importando a componente do index.js da pasta Form, com o nome Form
import Form from './Form';

//Importando a componente do index.js da pasta Tasks, com o nome Tasks
import Tasks from './Tasks';

//Importando a componente do index.js da pasta ValidatorTasks, com o nome ValidatorTasks
import ValidatorTasks from './ValidatorTasks';


//Quando a classe (filho) herda de outra classe (pai), no seu constructor devemos chamar super() para a mesma herdar o constructor da classe pai.

export default class Main extends Component {
  //Só é chamado constructor para criar state e passar props
  state = {
    //Todas as chaves aqui dentro, serão o estado do componente Main. E suas
    //mudanças refletirão no seu render.
    newTask: '',
    tasks: [
      //   'Fazer café',
      //   'Beber água',
      //   'Estudar',
    ],
    indexToEdit: -1,
    searchTask: '',
    showTask: '',
    styleTask: {},
    //Sempre passar um valor inicial
  };

  //Como n tem-se um constructor, consequentemente não bindamos (vinculamos) o this para os métodos. Para
  // contornar esse problema pode-se transformar os métodos em arrows functions, pois o mesmo
  // ja binda o this para main automaticamente. Ou seja, conserva-se a referencia do this dentro do
  // escolo da classe.

  componentDidMount() {
    //Analisa uma json de string e retorna valor ou objeto
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.newTask);

    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;
    // console.log(`As tarefas mudaram`, tasks);

    //Após update, convertendo json de string e salvando no localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("OIIEEE");
    const { tasks, indexToEdit } = this.state; // Referencia ao endereço onde está os elementos da state.
    let { newTask } = this.state;
    newTask = newTask.trim(); //Tirar espaçamentos a mais

    //Se newTask existir no array tasks ou seja  já para
    if (tasks.indexOf(newTask) !== -1) return;

    //Como não podemos editar uma state diretamente, criamos uma nova variavél
    //E damos os valores desse state para ela. E essa nova variável podemos mudar
    const cloneNewTasks = [...tasks]; //, newTask]; //Spread operator => copia exatamente igual

    //Depois de clonar tasks, podemos setar na state tasks
    if (indexToEdit === -1) {
      this.setState({
        tasks: [...cloneNewTasks, newTask],
        newTask: '', //Para limpar o value do input
      });
    } else {
      cloneNewTasks[indexToEdit] = newTask;

      this.setState({
        tasks: [...cloneNewTasks],
        newTask: '', //Para limpar o value do input
        indexToEdit: -1,
      });
    }

    //Primeira FORMA
    //Limpa o input depois de salvar a task. OBS: preciso retirar apropriedade value da tag input para funcionar
    // const intputText = document.querySelector("input");
    // intputText.value = "";
  };

  handleChange = (event) => {
    //Para mudarmos os valores de chaves da state precisamos utilizar o método setState().
    this.setState({
      newTask: event.target.value,
    });
  };

  handleEdit = (event, index) => {
    const { tasks } = this.state;

    this.setState({
      indexToEdit: index,
      newTask: tasks[index],
    });
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newsTasks = [...tasks];

    newsTasks.splice(index, 1);

    this.setState({
      tasks: [...newsTasks],
    });
  };

  handleChangeValidator = (event) => {
    this.setState({
      searchTask: event.target.value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();


    const { tasks, searchTask} = this.state;

    const condition = tasks.find(el => el === searchTask);

    if (!condition) {
      this.setState({
        searchTask:'',
        showTask: 'Essa tarefa não está na lista, SUA ESCÓRIA!!',
        styleTask: {backgroundcolor: "#f04c64"},
      })
    } else {
      this.setState({
        searchTask:'',
        showTask: 'Essa tarefa está na lista, NOBRE PADAWAN!!',
        styleTask: {backgroundcolor: "#4DF06D"},
      })
    }

    // console.log(event.target.value);
  }

  render() {
    //Importanto o valor da state, com chave newTask
    // const newTask = this.state.newTask
    const { newTask, tasks, searchTask, showTask, styleTask } = this.state;

    return (
      //No JSX usamos className, pois class pe uma palavra reservada do html/js.
      <div className="main">
        <h1>Lista de Tarefa</h1>
        {/* Para usar js dentro do jsx precisamos colocar entre chaves "{}" */}

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        {/* <h3>{ newTask }</h3>
          <h2>{ tasks }</h2> */}

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />

        <h1>Validator de Tarefa</h1>

        <ValidatorTasks
          handleSearch={this.handleSearch}
          handleChangeValidator={this.handleChangeValidator}
          searchTask={searchTask}
          showTask={showTask}
          styleTask={styleTask}
        />
      </div>
    );
  }
}

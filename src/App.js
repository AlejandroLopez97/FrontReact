import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import  Example  from './hooks/Example';
import MiComponenteConContexto  from './hooks/Example2';
import Example3 from './hooks/Example3';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Example></Exaple> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* Todo lo que hay aquí es tratado como props.children */}
        {/* <Example3 nombre = "Alejandro">
          <h3>
            Contenido del props.children
          </h3>
        </Example3> */}
        <GreetingStyled name="Alejandro"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
